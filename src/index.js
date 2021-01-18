module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        commonTens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        foldingTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    let strNumber = String(number)

    switch (strNumber.length) {
        case 3 :
            return strNumber.slice(1,3) !== '00' ?
                `${units[+strNumber[0]]} hundred ${toReadable(+strNumber.slice(1, 3))}` :
                `${units[+strNumber[0]]} hundred`
        case 2 :
            if (strNumber[0] > 1) {
                return strNumber[1] !== '0' ?
                    `${foldingTens[+strNumber[0] - 2]} ${toReadable(+strNumber.slice(1, 2))}` :
                    foldingTens[+strNumber[0] - 2]
            }
            else return commonTens[+strNumber[1]]

        case 1 : return units[+strNumber]
    }
}
