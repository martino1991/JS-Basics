function yardGreening(input) {

    let totalQuadrat = input[0];

    let totalPrice = totalQuadrat * 7.61;
    let totalDiscount = totalPrice * 0.18;
    let finalPrice = totalPrice - totalDiscount

    let result = `The final price is: ${finalPrice} lv.
The discount is: ${totalDiscount} lv.`;
 
    console.log(result);

}
