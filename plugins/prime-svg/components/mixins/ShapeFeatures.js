/**
 * * Shape features
 * Algunas definiciones globales que aplican a todas las formas de la librería
 */
 export const ShapeFeatures = {
    data(){
        return {
            updater: 0,
            gtx: (typeof(this.$props.tx) !== 'undefined') ? this.$props.tx : 0,
            gty: (typeof(this.$props.ty) !== 'undefined') ? this.$props.ty : 0,
        }
    },
    props: {
        x: {
            description: "Base x axis coordinate in pixels",
            type: [Number, String, Boolean],
            default: 0,
        },
        y: {
            description: "Base y axis coordinate in pixels",
            type: [Number, String, Boolean],
            default: 0,
        },
        bx: {
            description: "Base x axis coordinate in pixels. It allows to add additional coordinates to shapes that doesn't have a base coordinate",
            type: [Number, String, Boolean],
            default: 0,
        },
        by: {
            description: "Base y axis coordinate in pixels. It allows to add additional coordinates to shapes that doesn't have a base coordinate",
            type: [Number, String, Boolean],
            default: 0,
        },
        tx: {
            description: "Transform x axis coordinate in pixels",
            type: [Number, String, Boolean],
            default: 0,
        },
        ty: {
            description: "Transform y axis coordinate in pixels",
            type: [Number, String, Boolean],
            default: 0,
        },
        ta: {
            description: "Refers to transform angle in degrees. Transform shape position around the elipse center of the x,y coordinates",
            type: [Number, String],
            default: undefined,
        },
        ra: {
            description: "Refers to rotate angle in degrees. Rotates shape position around its center, based on its transform-origin property value",
            type: [Number, String],
            default: undefined,
        },
        sa: {
            description: "Refers to scale amount. Scales shape size from its center",
            type: [Number, String],
            default: undefined,
        },
        transition: {
            description: 'Propiedad CSS de tiempo de ejecución de transición. Cuánto se demora en pasar de un estado a otro.',
            type: String,
            default: '0ms'
        },
        fill: {
            description: 'Propiedad CSS de color de relleno.',
            type: [String, Boolean],
            default: false
        },
        stroke: {
            description: 'Propiedad CSS de color de borde.',
            type: [String, Boolean],
            default: false
        },
        strokeWidth: {
            description: 'Propiedad CSS de ancho de trazo de borde.',
            type: [Number, Boolean, String],
            default: false
        },
        id: {
            description: 'Propiedad HTML para definir identificador único del componente.',
            type: [String],
            default: null
        },
        ox: {
            description: 'Define la orientación del eje x. + es positiva/derecha y - es negativa/izquierda.',
            type: String,
            default: '+'
        },
        oy: {
            description: 'Define la orientación del eje y. + es positiva/arriba y - es negativa/abajo.',
            type: String,
            default: '+'
        },
        textOrientation: {
            description: 'Orientación del texto.',
            type: [Boolean, String],
            default: false,
        }
        
        
    },
    computed: {
        gbx() {
            return (typeof(this.$props.bx ) !== 'undefined') ? parseFloat(this.$props.bx) * ((this.$props.ox == "+") ? 1 : -1) : 0
        },
        gby() {
            return (typeof(this.$props.by ) !== 'undefined') ? parseFloat(this.$props.by) * ((this.$props.oy == "+") ? -1 : 1)  : 0
        },
        cgtx:{
            cache: false,
            get(){
                this.updater;
                return this.gtx;
            }
        }, 
        cgty:{
            cache: false,
            get(){
                this.updater;
                return this.gty;
            }
        }, 
        radialTransformation:{
            cache: false,
            get(){

                this.updater;
                let x  = this.gbx;
                let tx = this.cgtx;
                let y  = this.gby;
                let ty = this.cgty;
                let ta = (typeof(this.$props.ta) !== 'undefined') ? this.$props.ta : 0;
    
                if(ta !== 0 && ta < 0){
                    ta = 360 + (ta % 360)
                }
                if(ta == ''){
                    ta = 0;
                }
    
                let ctx = x + tx;
                let cty = y + ty;
    
                return {
                    x  :  x  ,
                    y  :  y  ,
                    tx :  tx ,
                    ty :  ty ,
                    ctx:  ctx,
                    cty:  cty,
                    ta :  ta ,
                    ci : [ctx,cty],
                    cii: [
                        (ctx * Math.cos((ta*Math.PI)/180)) - (cty * Math.sin((ta*Math.PI)/180)),
                        (ctx * Math.sin((ta*Math.PI)/180)) + (cty * Math.cos((ta*Math.PI)/180))
                    ]
                }
            }
           
        },
        shapeFeatures:{
            cache: false,
            get(){

                this.updater;
                let resFeatures = {
                    id: this.$props.id,
                    fill: this.$props.fill,
                    bx: this.gbx,
                    by: this.gby,
                    updater: this.updater,
                    stroke: this.$props.stroke,
                    'stroke-width': this.$props.strokeWidth,
                    'text-orientation': this.$props.textOrientation,
                    style: {
                        transition: `${this.$props.transition}`,
                        'text-orientation': (this.$props.textOrientation) ?? false,
    
                    }
                }
                
                let x_translate = 0;
                let y_translate = 0;
                let rotateString = (this.$props.ra) ? `rotate(${this.$props.ra}deg)` : ``;
                let scaleString = (this.$props.sa) ? `scale(${this.$props.sa})` : ``;     
    
                if(typeof(this.$props.ta) !== 'undefined' && this.$props.ta !== 'undefined' && this.$props.ta !== '' && typeof(this.cgtx) !== 'string'){
                    resFeatures.x = 0;
                    resFeatures.y = 0;
                    // Si es rectángulo aplicar fix

                    x_translate = this.radialTransformation.cii[0]
                    y_translate = this.radialTransformation.cii[1]
                    /**
                     * Specific shapes transformations
                     */
                     switch (true) {
                        // Fix rectangle growth coordinates
                        case this.type == 'rect':
                            y_translate = y_translate - this.$attrs.height       
                            break;
                        case this.type == 'circle':
                            x_translate = this.$props.ox == '-' ? x_translate - (this.$attrs.cx*2) : x_translate;
                            y_translate = this.$props.oy == '+' ?  y_translate - (this.$attrs.cy*2) : y_translate;
                            break;
                        case this.type == 'ellipse':
                            x_translate = this.$props.ox == '-' ? x_translate - (this.$attrs.cx*2) : x_translate;
                            y_translate = this.$props.oy == '+' ?  y_translate - (this.$attrs.cy*2) : y_translate;
                            break;
                        case this.type == 'line':
                            break;
                        case this.type == 'arc':
                            break;
                    
                        default:
                            break;
                    }


                    let translateString = `translate(${x_translate + 'px' },${y_translate + 'px' })`; 
                    
                    resFeatures.style.transform = `${translateString + rotateString + scaleString}`;

                } else {

                    
                    resFeatures.x = this.$props.x;
                    resFeatures.y = this.$props.y;

                    x_translate = (typeof(this.cgtx) == 'string') ? this.cgtx : this.cgtx + this.gbx;
                    y_translate = (typeof(this.cgty) == 'string') ? this.cgty : this.cgty + this.gby;


                    
                    /**
                     * Specific shapes transformations
                     */
                    switch (true) {
                        // Fix rectangle growth coordinates
                        case this.type == 'rect':
                            y_translate = y_translate - this.$attrs.height
                            break;
                        case this.type == 'circle':
                            x_translate = this.$props.ox == '-' ? x_translate - (this.$attrs.cx*2) : x_translate;
                            y_translate = this.$props.oy == '+' ?  y_translate - (this.$attrs.cy*2) : y_translate;
                            break;
                        case this.type == 'ellipse':
                            x_translate = this.$props.ox == '-' ? x_translate - (this.$attrs.cx*2) : x_translate;
                            y_translate = this.$props.oy == '+' ?  y_translate - (this.$attrs.cy*2) : y_translate;
                            break;
                        case this.type == 'line':
                            break;
                        case this.type == 'arc':
                            break;
                            
                        default:
                            break;
                    }




                    let translateString = `translate(${x_translate + 'px' },${ y_translate + 'px' })`; 
    
                    resFeatures.style.transform = `${translateString + rotateString + scaleString}`;
                }
    
                if(this.$props.ra){
                    resFeatures.style['transform-box'] = 'fill-box';
                    // resFeatures.style['transform-origin'] = 'center';
                }
    
                return resFeatures
            }
        },
        
    },
    methods: {
        //! Escribir scaler
        //! Escribir generador de punto en circunferencia. Triángulo equilátero, hexágono equiláterro
        
        oValue(axis,values){

            // console.log(typeof(values))
            let valoresEditados = values;
            
            switch (axis) {
                case 'x':
                    if(this.$props.ox == '+'){
                        return values;
                    } else {                        
                        return -values;
                    }
                    break;
                case 'y':
                    if(this.$props.oy == '+'){
                        return -values;
                    } else {                        
                        return values;
                    }
                    break;
                case 'xy':
                    if(this.$props.ox == '-'){         
                        valoresEditados = valoresEditados.map(function(el){
                            el[0] = -el[0];
                            return el; 
                        })
                    }

                    if(this.$props.oy == '+'){
                        valoresEditados = valoresEditados.map(function(el){
                            el[1] = -el[1];
                            return el; 
                        })
                    } 
                    return valoresEditados

                    break;
            
                default:
                    break;
            }
        },
        stringToDate(input){
            let res = new Date(input)
            return res
        },
        
        
        
        
    },
    mounted(){
        this.updater++
    },
}