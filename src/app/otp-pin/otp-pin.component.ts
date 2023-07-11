import {Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-otp-pin',
  templateUrl: './otp-pin.component.html',
  styleUrls: ['./otp-pin.component.scss']
})
export class OtpPinComponent implements OnInit {

  @ViewChildren('myInput') myInputs: QueryList<ElementRef>;
  @ViewChildren('myInputTow') myInputTowList: QueryList<ElementRef>;
  faeye = faEye
  faeyeslash = faEyeSlash

  pass: string = '';

  @ViewChild("text1") text1: ElementRef;
  @ViewChild("text2") text2: ElementRef;
  @ViewChild("text3") text3: ElementRef;
  @ViewChild("text4") text4: ElementRef;
  @ViewChild("text5") text5: ElementRef;
  @ViewChild("text6") text6: ElementRef;

  @ViewChild("text7") text7: ElementRef;
  @ViewChild("text8") text8: ElementRef;
  @ViewChild("text9") text9: ElementRef;
  @ViewChild("text10") text10: ElementRef;
  @ViewChild("text11") text11: ElementRef;
  @ViewChild("text12") text12: ElementRef;

  @ViewChild("inputFirst") keyboard: KeyboardEvent

  viewButton: boolean = true;
  hideButton: boolean = false;

  viewButtonTwo: boolean = true;
  hideButtonTwo: boolean = false;
  indexInput: any
  increment:number = 0
  maxLenght:any
  arrayData:any =[]
  isSaw: boolean = true;
  isSawTwo: boolean = true;
  valor:string=''
  arrayDataTwo: any =[]

  constructor() {
  }

  ngOnInit(): void {
  }

  result() {
    for(let element of this.arrayData){
      this.pass += element;
    }
    alert("aqui está el array: " + this.pass)
    this.pass=''
  }
  visualizarCodigo(codigo: number){
    let buttonTeclado=0;
    if(codigo == 1){
      for(let myInput of this.myInputs){
        if(this.arrayData[buttonTeclado]){
          myInput.nativeElement.value = this.arrayData[buttonTeclado];
          myInput.nativeElement.style =[]
        }
        buttonTeclado++
      }
      this.viewButton= false;
      this.hideButton = true
    }else if(codigo == 2){
      for(let myInput of this.myInputTowList){
        if(this.arrayDataTwo[buttonTeclado]){
          myInput.nativeElement.value = this.arrayDataTwo[buttonTeclado];
          myInput.nativeElement.style =[]
        }
        buttonTeclado++
      }
      this.viewButtonTwo= false;
      this.hideButtonTwo = true
    }


  }
  ocultarCodigo(codigo: number){
    let buttonTeclado=0;
    if(codigo ==3){
      for(let myInput of this.myInputs){
        if(this.arrayData[buttonTeclado]){
          myInput.nativeElement.value = this.arrayData[buttonTeclado].replace(this.arrayData[buttonTeclado],"•");;
          this.styleCod(myInput.nativeElement.style)
        }
        buttonTeclado++
      }
      this.viewButton= true;
      this.hideButton = false;
    }else if(codigo==4){
      for(let myInput of this.myInputTowList){
        if(this.arrayDataTwo[buttonTeclado]){
          myInput.nativeElement.value = this.arrayDataTwo[buttonTeclado].replace(this.arrayDataTwo[buttonTeclado],"•");;
          this.styleCod(myInput.nativeElement.style)
        }
        buttonTeclado++
      }
      this.viewButtonTwo= true;
      this.hideButtonTwo = false;
    }
  }

  presionarTecla(buttonTeclado:any){
    if(isNaN(buttonTeclado) || this.arrayData.length ===6){
      if (this.arrayData.length === 6 && buttonTeclado != 'borrar'  && buttonTeclado != 'borrarTodo' && buttonTeclado != 'continuar' && buttonTeclado !='cancelar') {
        if(this.indexInput==undefined){
          this.indexInput =this.myInputTowList.get(0).nativeElement;
          this.isSawTwo=false
        }
        this.inputLineTwo(this.hideButtonTwo, this.viewButtonTwo, buttonTeclado)
      }
      else if(buttonTeclado == 'borrar'){
        console.log(this.indexInput)
        if(this.indexInput == undefined && this.arrayData.length !==0){
          const nextelement = this.myInputs.get(5).nativeElement
          this.indexInput = nextelement.nextElementSibling
        }

        if(this.arrayDataTwo.length ==0){
          if(this.indexInput != undefined){
            let previus = this.indexInput.previousElementSibling
            while (previus && previus.tagName !== 'INPUT') {
              previus = previus.previousElementSibling;
            }
            if(previus!=null){
              previus.style=[]
              this.arrayData.pop()
              if(this.arrayData==""|| this.arrayData==null){
                this.isSaw=true
              }
              //this.arraysall="" ? this.isSaw=false : this.isSaw=true
              previus.value = '';
              previus.focus();
              this.indexInput = previus

            }
          }
        }else if(this.arrayData.length){
          if(this.indexInput != undefined){
            let previus = this.indexInput.previousElementSibling
            if(previus!=null){
              previus.style=[]
              this.arrayDataTwo.pop()
              if(this.arrayDataTwo==""|| this.arrayDataTwo==null){
                this.isSawTwo=true
              }
              //this.arraysall="" ? this.isSaw=false : this.isSaw=true
              previus.value = '';
              previus.focus();
              this.indexInput = previus
            }
            if(!this.arrayDataTwo.length || this.arrayDataTwo.length==0 ){
              this.indexInput = undefined
            }
          }
        }


      }else if(buttonTeclado =='borrarTodo' && this.arrayData!=''){
        for(let myInput of this.myInputs){
          myInput.nativeElement.style=[]
          myInput.nativeElement.value ='';
          this.indexInput=undefined
          this.arrayData = []
          this.isSaw=true
          this.viewButton= true;
          this.hideButton = false
        }
        for(let myInput of this.myInputTowList){
          myInput.nativeElement.style=[]
          myInput.nativeElement.value ='';
          this.indexInput=undefined
          this.arrayDataTwo = []
          this.isSawTwo=true
          this.viewButtonTwo= true;
          this.hideButtonTwo = false
        }
      }else if(buttonTeclado =='continuar'){
        if(this.arrayData.length<6){
          alert("falta");
        }else{
          this.result()

        }

      }

    }else{
        if(this.indexInput==undefined){
          this.indexInput =this.myInputs.get(0).nativeElement;
          this.isSaw=false;
        }
        this.inputLineOne(this.hideButton,this.viewButton, buttonTeclado);
    }
  }

  inputLineOne(hideButton: boolean, viewButton: boolean, buttonTeclado: any){
    if(hideButton == false && viewButton==true){
      if(this.indexInput == this.myInputs.get(0).nativeElement){
        this.arrayData.push(buttonTeclado.toString());
        this.text1.nativeElement.value = buttonTeclado.toString().replace(buttonTeclado.toString(),"•");
        this.styleCod(this.text1.nativeElement.style);
        this.move(this.keyboard,"",this.indexInput,this.indexInput.nextElementSibling)
        this.isSaw=false

      }else if(this.indexInput == this.myInputs.get(1).nativeElement){
        this.arrayData.push(buttonTeclado.toString());
        this.text2.nativeElement.value = buttonTeclado.toString().replace(buttonTeclado.toString(),"•");
        this.styleCod(this.text2.nativeElement.style);
        this.move(this.keyboard,this.text1.nativeElement,this.indexInput,this.indexInput.nextElementSibling)

      }
      else if(this.indexInput == this.myInputs.get(2).nativeElement){
        this.arrayData.push(buttonTeclado.toString());
        this.text3.nativeElement.value = buttonTeclado.toString().replace(buttonTeclado.toString(),"•");
        this.styleCod(this.text3.nativeElement.style);
        this.move(this.keyboard,this.text2.nativeElement,this.indexInput,this.indexInput.nextElementSibling)

      }
      else if(this.indexInput == this.myInputs.get(3).nativeElement){
        this.arrayData.push(buttonTeclado.toString());
        this.text4.nativeElement.value = buttonTeclado.toString().replace(buttonTeclado.toString(),"•");
        this.styleCod(this.text4.nativeElement.style);
        this.move(this.keyboard,this.text3.nativeElement,this.indexInput,this.indexInput.nextElementSibling)

      }
      else if(this.indexInput == this.myInputs.get(4).nativeElement){
        this.arrayData.push(buttonTeclado.toString());
        this.text5.nativeElement.value = buttonTeclado.toString().replace(buttonTeclado.toString(),"•");
        this.styleCod(this.text5.nativeElement.style);
        this.move(this.keyboard,this.text4.nativeElement,this.indexInput,this.indexInput.nextElementSibling)
      }
      else if(this.indexInput == this.myInputs.get(5).nativeElement){
        this.arrayData.push(buttonTeclado.toString());
        this.text6.nativeElement.value = buttonTeclado.toString().replace(buttonTeclado.toString(),"•");
        this.styleCod(this.text6.nativeElement.style);
        this.move(this.keyboard,this.text5.nativeElement,this.indexInput,this.indexInput.nextElementSibling)
        this.indexInput = undefined

      }

    }
    else if(viewButton == false && hideButton == true){
      if(this.indexInput == this.myInputs.get(0).nativeElement){
        this.arrayData.push(buttonTeclado.toString());
        this.text1.nativeElement.value = buttonTeclado.toString()
        this.text1.nativeElement.style = [];
        this.move(this.keyboard,"",this.indexInput,this.indexInput.nextElementSibling)
        this.isSaw=false

      }else if(this.indexInput == this.myInputs.get(1).nativeElement){
        this.arrayData.push(buttonTeclado.toString());
        this.text2.nativeElement.value = buttonTeclado.toString()
        this.text2.nativeElement.style = [];
        this.move(this.keyboard,this.text1.nativeElement,this.indexInput,this.indexInput.nextElementSibling)

      }
      else if(this.indexInput == this.myInputs.get(2).nativeElement){
        this.arrayData.push(buttonTeclado.toString());
        this.text3.nativeElement.value = buttonTeclado.toString()
        this.text3.nativeElement.style = [];
        this.move(this.keyboard,this.text2.nativeElement,this.indexInput,this.indexInput.nextElementSibling)

      }
      else if(this.indexInput == this.myInputs.get(3).nativeElement){
        this.arrayData.push(buttonTeclado.toString());
        this.text4.nativeElement.value = buttonTeclado.toString()
        this.text4.nativeElement.style = [];
        this.move(this.keyboard,this.text3.nativeElement,this.indexInput,this.indexInput.nextElementSibling)

      }
      else if(this.indexInput == this.myInputs.get(4).nativeElement){
        this.arrayData.push(buttonTeclado.toString());
        this.text5.nativeElement.value = buttonTeclado.toString()
        this.text5.nativeElement.style = [];
        this.move(this.keyboard,this.text4.nativeElement,this.indexInput,this.indexInput.nextElementSibling)

      }
      else if(this.indexInput == this.myInputs.get(5).nativeElement){
        this.arrayData.push(buttonTeclado.toString());
        this.text6.nativeElement.value = buttonTeclado.toString()
        this.text6.nativeElement.style = [];
        this.move(this.keyboard,this.text5.nativeElement,this.indexInput,this.indexInput.nextElementSibling)
        this.indexInput = undefined

      }
    }
  }

  inputLineTwo(hideButtonTwo: boolean, viewButtonTwo: boolean, buttonTeclado: any){
    if(hideButtonTwo == false && viewButtonTwo==true){
      if(this.indexInput ==this.myInputTowList.get(0).nativeElement){
        this.arrayDataTwo.push(buttonTeclado.toString());
        this.text7.nativeElement.value = buttonTeclado.toString().replace(buttonTeclado.toString(),"•");
        this.styleCod(this.text7.nativeElement.style);
        this.move(this.keyboard,"",this.indexInput,this.indexInput.nextElementSibling)


      }else if(this.indexInput == this.myInputTowList.get(1).nativeElement){
        this.arrayDataTwo.push(buttonTeclado.toString());
        this.text8.nativeElement.value = buttonTeclado.toString().replace(buttonTeclado.toString(),"•");
        this.styleCod(this.text8.nativeElement.style);
        this.move(this.keyboard,this.text7.nativeElement,this.indexInput,this.indexInput.nextElementSibling)
      }
      else if(this.indexInput == this.myInputTowList.get(2).nativeElement){
        this.arrayDataTwo.push(buttonTeclado.toString());
        this.text9.nativeElement.value = buttonTeclado.toString().replace(buttonTeclado.toString(),"•");
        this.styleCod(this.text9.nativeElement.style);
        this.move(this.keyboard,this.text8.nativeElement,this.indexInput,this.indexInput.nextElementSibling)
      }
      else if(this.indexInput == this.myInputTowList.get(3).nativeElement){
        this.arrayDataTwo.push(buttonTeclado.toString());
        this.text10.nativeElement.value = buttonTeclado.toString().replace(buttonTeclado.toString(),"•");
        this.styleCod(this.text10.nativeElement.style);
        this.move(this.keyboard,this.text9.nativeElement,this.indexInput,this.indexInput.nextElementSibling)
      }
      else if(this.indexInput == this.myInputTowList.get(4).nativeElement){
        this.arrayDataTwo.push(buttonTeclado.toString());
        this.text11.nativeElement.value = buttonTeclado.toString().replace(buttonTeclado.toString(),"•");
        this.styleCod(this.text11.nativeElement.style);
        this.move(this.keyboard,this.text10.nativeElement,this.indexInput,this.indexInput.nextElementSibling)
      }
      else if(this.indexInput == this.myInputTowList.get(5).nativeElement){
        this.arrayDataTwo.push(buttonTeclado.toString());
        this.text12.nativeElement.value = buttonTeclado.toString().replace(buttonTeclado.toString(),"•");
        this.styleCod(this.text12.nativeElement.style);
        this.move(this.keyboard,this.text11.nativeElement,this.indexInput,this.indexInput.nextElementSibling)
      }
    }else if(viewButtonTwo == false && hideButtonTwo == true){
      if(this.indexInput ==this.myInputTowList.get(0).nativeElement){
        this.arrayDataTwo.push(buttonTeclado.toString());
        this.text7.nativeElement.value = buttonTeclado.toString()
        this.text7.nativeElement.style = [];
        this.move(this.keyboard,"",this.indexInput,this.indexInput.nextElementSibling)
        this.isSawTwo=false


      }else if(this.indexInput == this.myInputTowList.get(1).nativeElement){
        this.arrayDataTwo.push(buttonTeclado.toString());
        this.text8.nativeElement.value = buttonTeclado.toString()
        this.text8.nativeElement.style = [];
        this.move(this.keyboard,this.text7.nativeElement,this.indexInput,this.indexInput.nextElementSibling)
      }
      else if(this.indexInput == this.myInputTowList.get(2).nativeElement){
        this.arrayDataTwo.push(buttonTeclado.toString());
        this.text9.nativeElement.value = buttonTeclado.toString();
        this.text8.nativeElement.style = [];
        this.move(this.keyboard,this.text8.nativeElement,this.indexInput,this.indexInput.nextElementSibling)
      }
      else if(this.indexInput == this.myInputTowList.get(3).nativeElement){
        this.arrayDataTwo.push(buttonTeclado.toString());
        this.text10.nativeElement.value = buttonTeclado.toString()
        this.text8.nativeElement.style = [];
        this.move(this.keyboard,this.text9.nativeElement,this.indexInput,this.indexInput.nextElementSibling)
      }
      else if(this.indexInput == this.myInputTowList.get(4).nativeElement){
        this.arrayDataTwo.push(buttonTeclado.toString());
        this.text11.nativeElement.value = buttonTeclado.toString()
        this.text8.nativeElement.style = [];
        this.move(this.keyboard,this.text10.nativeElement,this.indexInput,this.indexInput.nextElementSibling)
      }
      else if(this.indexInput == this.myInputTowList.get(5).nativeElement){
        this.arrayDataTwo.push(buttonTeclado.toString());
        this.text12.nativeElement.value = buttonTeclado.toString()
        this.text8.nativeElement.style = [];
        this.move(this.keyboard,this.text11.nativeElement,this.indexInput,this.indexInput.nextElementSibling)
      }
    }


  }

  styleCod(e:any){
  e.fontSize='65px';
    e.color= '#08385E';
    e.height='66px'
}

  move(e:any,p:any,c:any,n:any){
    this.valor  += c.value;
    var length = c.value.length;
    this.maxLenght = c.getAttribute('maxlength');

    if(length==this.maxLenght){
      if(n != ""){
        this.indexInput = n
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
