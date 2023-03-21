import {Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-otp-pin',
  templateUrl: './otp-pin.component.html',
  styleUrls: ['./otp-pin.component.scss']
})
export class OtpPinComponent implements OnInit {

  @ViewChildren('myInput') myInputs: QueryList<ElementRef>;
  faeye = faEye
  faeyeslash = faEyeSlash

  pass: string = '';
  isTeclado: boolean =false;
  @Output() isOpen: EventEmitter<any>  = new EventEmitter<any>()
  @Output() position: EventEmitter<any>  = new EventEmitter<any>()
  @ViewChild("input") input: ElementRef

  @ViewChild("text1") text1: ElementRef;
  @ViewChild("text2") text2: ElementRef;
  @ViewChild("text3") text3: ElementRef;
  @ViewChild("text4") text4: ElementRef;
  @ViewChild("text5") text5: ElementRef;
  @ViewChild("text6") text6: ElementRef;
  obteniendo : any

  @ViewChild("inputsito") keyboard: KeyboardEvent

  mirar:string="VER"
  ocultar:string = "ocultar"
  viewButton: boolean = true;
  hideButton: boolean = false;
  positiones: any
  increment:number =0
  maxLenght:any
  arraysall:any =[]
  isSaw: boolean = true;
ver: boolean = true;
textito:string=''
  valor:string=''
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    for(let asa of this.arraysall){
      this.pass += asa;
    }
    alert("aqui está el array: " + this.pass)
    this.pass=''
    /*this.myInputs.forEach(elemento => {
      this.pass +=elemento.nativeElement.value
    });

    this.pass=''*/
  }
  visualizarCodigo(){
    let i=0;
    if(this.ver){

    }
    for(let holita of this.myInputs){
      if(this.arraysall[i]){
        holita.nativeElement.value = this.arraysall[i];
        holita.nativeElement.style = [];
      }
        i++
    }
    this.viewButton= false;
    this.hideButton = true
  }
  ocultarCodigo(){
    let i=0;
    for(let holita of this.myInputs){
      if(this.arraysall[i]){
        holita.nativeElement.value = this.arraysall[i].replace(this.arraysall[i],"•");;
        this.styleCod(holita.nativeElement.style)
      }
      i++
    }
    this.viewButton= true;
    this.hideButton = false;
  }


  mostrar(key:any){
    console.log(key.target)
    this.positiones = key.target
    this.positiones.focus();
    this.viewButton = true;
    this.hideButton = false;
  }

  presionarTecla(i:any){
    if(isNaN(i)){
      if(i == 'borrar'){
        console.log(this.positiones)
        if(this.positiones != undefined){
          let previus = this.positiones.previousElementSibling
          if(previus!=null){
            previus.style=[]
            this.arraysall.pop()
            if(this.arraysall==""|| this.arraysall==null){
              this.isSaw=true
            }
            //this.arraysall="" ? this.isSaw=false : this.isSaw=true
            previus.value = '';
            previus.focus();
            this.positiones = previus

          }
        }





      }else if(i =='borrarTodo' && this.arraysall!=''){
        console.log(i)
        console.log(this.myInputs)
        console.log(this.arraysall)
        for(let hola of this.myInputs){
          hola.nativeElement.style=[]
          hola.nativeElement.value ='';
          this.positiones=undefined
          this.arraysall = []
          this.isSaw=true
          this.viewButton= true;
          this.hideButton = false
        }
      }else if(i =='continuar'){
        if(this.arraysall.length<6){
          alert("falta");
        }else{
          this.ngAfterViewInit()

        }

      }

    }else{
        if(this.positiones==undefined){
          this.positiones =this.myInputs.get(0).nativeElement
          this.isSaw=false;
        }
        if(this.hideButton == false){
          if(this.positiones == this.myInputs.get(0).nativeElement){
            this.arraysall.push(i.toString());
            this.text1.nativeElement.value = i.toString().replace(i.toString(),"•");
            this.styleCod(this.text1.nativeElement.style);
            this.move(this.keyboard,"",this.positiones,this.positiones.nextElementSibling)
            this.isSaw=false

          }else if(this.positiones == this.myInputs.get(1).nativeElement){
            this.arraysall.push(i.toString());
            this.text2.nativeElement.value = i.toString().replace(i.toString(),"•");
            this.styleCod(this.text2.nativeElement.style);
            this.move(this.keyboard,this.text1.nativeElement,this.positiones,this.positiones.nextElementSibling)

          }
          else if(this.positiones == this.myInputs.get(2).nativeElement){
            this.arraysall.push(i.toString());
            this.text3.nativeElement.value = i.toString().replace(i.toString(),"•");
            this.styleCod(this.text3.nativeElement.style);
            this.move(this.keyboard,this.text2.nativeElement,this.positiones,this.positiones.nextElementSibling)

          }
          else if(this.positiones == this.myInputs.get(3).nativeElement){
            this.arraysall.push(i.toString());
            this.text4.nativeElement.value = i.toString().replace(i.toString(),"•");
            this.styleCod(this.text4.nativeElement.style);
            this.move(this.keyboard,this.text3.nativeElement,this.positiones,this.positiones.nextElementSibling)

          }
          else if(this.positiones == this.myInputs.get(4).nativeElement){
            this.arraysall.push(i.toString());
            this.text5.nativeElement.value = i.toString().replace(i.toString(),"•");
            this.styleCod(this.text5.nativeElement.style);
            this.move(this.keyboard,this.text4.nativeElement,this.positiones,this.positiones.nextElementSibling)

          }
          else if(this.positiones == this.myInputs.get(5).nativeElement){
            this.arraysall.push(i.toString());
            this.text6.nativeElement.value = i.toString().replace(i.toString(),"•");
            this.styleCod(this.text6.nativeElement.style);
            this.move(this.keyboard,this.text5.nativeElement,this.positiones,this.positiones.nextElementSibling)

          }

        }else if(this.viewButton == false){
          if(this.positiones == this.myInputs.get(0).nativeElement){
            this.arraysall.push(i.toString());
            this.text1.nativeElement.value = i.toString()
            this.text1.nativeElement.style = [];
            this.move(this.keyboard,"",this.positiones,this.positiones.nextElementSibling)
            this.isSaw=false

          }else if(this.positiones == this.myInputs.get(1).nativeElement){
            this.arraysall.push(i.toString());
            this.text2.nativeElement.value = i.toString()
            this.text2.nativeElement.style = [];
            this.move(this.keyboard,this.text1.nativeElement,this.positiones,this.positiones.nextElementSibling)

          }
          else if(this.positiones == this.myInputs.get(2).nativeElement){
            this.arraysall.push(i.toString());
            this.text3.nativeElement.value = i.toString()
            this.text3.nativeElement.style = [];
            this.move(this.keyboard,this.text2.nativeElement,this.positiones,this.positiones.nextElementSibling)

          }
          else if(this.positiones == this.myInputs.get(3).nativeElement){
            this.arraysall.push(i.toString());
            this.text4.nativeElement.value = i.toString()
            this.text4.nativeElement.style = [];
            this.move(this.keyboard,this.text3.nativeElement,this.positiones,this.positiones.nextElementSibling)

          }
          else if(this.positiones == this.myInputs.get(4).nativeElement){
            this.arraysall.push(i.toString());
            this.text5.nativeElement.value = i.toString()
            this.text5.nativeElement.style = [];
            this.move(this.keyboard,this.text4.nativeElement,this.positiones,this.positiones.nextElementSibling)

          }
          else if(this.positiones == this.myInputs.get(5).nativeElement){
            this.arraysall.push(i.toString());
            this.text6.nativeElement.value = i.toString()
            this.text6.nativeElement.style = [];
            this.move(this.keyboard,this.text5.nativeElement,this.positiones,this.positiones.nextElementSibling)

          }
        }

    }
  }

  styleCod(e:any){

  e.fontSize='65px';
    e.color= '#08385E'
}

  move(e:any,p:any,c:any,n:any){
    this.valor  += c.value;
    var length = c.value.length;
    this.maxLenght = c.getAttribute('maxlength');

    if(length==this.maxLenght){
      if(n != ""){
        this.positiones = n
        n.focus();
      }
    }
    if(e.key ==='Backspace'){
      if(p!=''){
        p.focus();
      }

    }


  }
}
