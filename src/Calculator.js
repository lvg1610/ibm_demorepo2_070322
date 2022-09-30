import React from 'react';
class Calculator extends React.Component 
      {
          constructor(props)
          {
              super(props);
              this.textBox = React.createRef();
              this.state={beforeVal:0,afterVal:0}
          }

          showValue = (event) => {
                this.textBox.current.value = this.textBox.current.value + event.target.value;
          }

          clear = () => {
             this.textBox.current.value = "";
          }

          calculate = () => {
             var text = this.textBox.current.value;
             var before = 0;
             var after = 0; 
             var opt="";
             var i = 0;
             for(i=0;i<text.length && (text.charAt(i)>=0 && text.charAt(i)<=9);i++)
                  before = before + text.charAt(i);
             opt = text.charAt(i++);   
             for(;i<text.length && (text.charAt(i)>=0 && text.charAt(i)<=9);i++)
                  after = after + text.charAt(i);
             if(opt==="+")
                this.textBox.current.value = parseInt(before) + parseInt(after);
             else if(opt==="-")
                this.textBox.current.value = parseInt(before) - parseInt(after); 
             else if(opt==="X")
                this.textBox.current.value = parseInt(before) * parseInt(after); 
             else if(opt==="/")
                this.textBox.current.value = parseInt(before) / parseInt(after);   
             else
                this.textBox.current.value = parseInt(before) % parseInt(after); 
          }

          deleteLastChar = () => {
               var txt = this.textBox.current.value;
               this.textBox.current.value = txt.substring(0,txt.length-1);
          } 

          render()
          {
             return(<table border="1" align="center"><tbody>
                      <tr>
                         <td colSpan="4"><input type="text" ref={this.textBox}/></td>
                      </tr>
                      <tr>
                         <td><input type="button"   value="C"  onClick={this.clear}/></td>
                         <td><input type="button"  value="<-"   onClick={this.deleteLastChar}/></td>
                         <td><input type="button"  value="%" onClick={this.showValue}/></td>
                         <td><input type="button"  value="/"   onClick={this.showValue} /></td>
                      </tr>
                      <tr>
                         <td><input type="button"  value="7" onClick={this.showValue}/></td>
                         <td><input type="button"  value="8" onClick={this.showValue}/></td>
                         <td><input type="button"  value="9" onClick={this.showValue}/></td>
                         <td><input type="button"  value="X"  onClick={this.showValue} /></td>
                      </tr>
                      <tr>
                         <td><input type="button"  value="4"  onClick={this.showValue}/></td>
                         <td><input type="button"  value="5"  onClick={this.showValue}/></td>
                         <td><input type="button"  value="6"  onClick={this.showValue}/></td>
                         <td><input type="button"  value="-"  onClick={this.showValue} /></td>
                      </tr>
                      <tr>
                         <td><input type="button"  value="1"  onClick={this.showValue}/></td>
                         <td><input type="button"  value="2"  onClick={this.showValue}/></td>
                         <td><input type="button"  value="3"  onClick={this.showValue}/></td>
                         <td><input type="button"  value="+"  onClick={this.showValue}/></td>
                      </tr>
                      <tr>
                         <td><input type="button"  value=" "/></td>
                         <td><input type="button"  value="0"  onClick={this.showValue}/></td>
                         <td><input type="button"  value="."/></td>
                         <td><input type="button"  value="="  onClick={this.calculate}/></td>
                      </tr>
                      </tbody>
                    </table> 
                   );       
          } 
      } 

export default Calculator;