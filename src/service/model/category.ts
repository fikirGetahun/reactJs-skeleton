 class Category {
    public  name:string ;
    public parent:string;
    public image: string;
    public order:number;
  //  public name:string ='';
  //  public parent:string ='';
  //  public image:BinaryData;
  //  public order:number =0;
 
  // export interface Category {
  //   name:   string;
  //   parent: string;
  //   image:  string;
  //   order:  string;

      nameSetter(name ): void{
        this.name = name;
      }
      parentSetter(name ){
        this.parent = name;
      }
      imageSetter(name ){
        this.image = name;
      }
      orderSetter(name ){
        this.order = name;
      }

    
    

    // public static toCategory(json: string): Category[] {
    //     return cast(JSON.parse(json), a(r("Category")));
    // }
      jsonOutput(){
        var output = {
          "name":this.name,
          "parent": this.parent,
          "image": this.image,
          "order": this.order

        }

        return output;
      }
    }
 


export default Category;