export class Ingredient {
    // ** FIRST APPROACH **
    // public name: string ;
    // public amount: number ;

    // constructor(name, amount) {
    //     this.name = name ; 
    //     this.amount = amount ;
    // }

    //SECOND APPROACH
    // Below behind the scene will assign recieving args to property as above
    constructor( public name: string, public amount: number){}


}