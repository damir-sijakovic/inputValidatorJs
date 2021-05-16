# dsijak/inputValidator

## What is it?

Tiny module that validates HTML inputs without any unnecessary overcomplicated features.

## How do I use this?

            ```
            var inputVal = dsijak.newInputValidator(document.getElementById('elementId').value);
            inputVal.configure({
                validateTable: 'ABCDEFabcdef1234567890',  //this is string of allowed chars
                stringMax: 16,
                stringMin: 16,      
            });
            
            if (!inputVal.validate())
            {
                alertDanger('Confirmation Code: ' + inputVal.eMessage);
                return;
            }
            
            console.log(inputVal.getValue());
            
            
            // to validate email use configure option:
            
            inputVal.configure({
                isEmail: true,
            });
            ```


## What this module can do?

* Checks if all chars in input.value string are valid with validateTable
* Checks if input.value string is empty
* Checks minimal and maximal input.value string length
* Checks if input.value string is email

## Have Fun
