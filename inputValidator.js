if (!window.dsijak)
{
    window.dsijak = {};
    window.dsijak.inputValidator = {};
}
else if (!window.dsijak.inputValidator)
{
    window.dsijak.inputValidator = null;
}


window.dsijak.newInputValidator = function(value)
{    
    var private = {};  
    var public = {};    
    public.moduleName = 'dsijak/inputValidator';
    public.eMessage = null;
     
    private.validateTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$?_+-";
    private.value = value;
    private.stringMax = 320;
    private.stringMin = 3;
    private.isEmail = false;
        
    private.setEMessage = function(msg)
    {
        public.eMessage = msg;       
    }         
      
    public.configure = function(obj) 
    {
        private.validateTable = (obj!==null && obj.validateTable!==undefined) ? obj.validateTable : private.validateTable;
        private.value = (obj!==null && obj.value!==undefined) ? obj.value : private.value;
        private.stringMax = (obj!==null && obj.stringMax!==undefined) ? obj.stringMax : private.stringMax;
        private.stringMin = (obj!==null && obj.stringMin!==undefined) ? obj.stringMin : private.stringMin;
        private.isEmail = (obj!==null && obj.isEmail!==undefined) ? obj.isEmail : private.isEmail;
    }
    
    public.hasWhiteSpace = function(s) {
        return s.indexOf(' ') >= 0;
    }
    
    public.checkEmail = function()
    {
        if (!private.value)
        {
            return false;
        }
        if (public.hasWhiteSpace(private.value))
        {
            return false;
        }
        
        var re = /\S+@\S+\.\S+/;
        return re.test(private.value);
    };
    
    public.checkLength = function()
    {
        if (private.value.length > private.stringMax)
        {
            return false;
        }
        
        if (private.value.length < private.stringMin)
        {
            return false;
        }
        
        
        
        return true;
    };
    
    public.checkIfEmpty = function()
    {
        if (private.value === undefined || private.value === null || private.value === '')
        {
            return false;
        }
        return true;
    };
    
    public.checkTable = function()
    {
        if (private.value) {
            for (let i = 0; i < private.value.length; i++) {
                if (!private.validateTable.includes(private.value[i])) return false;
            }
        }
        return true;
    }
    
    public.getValue = function()
    {
        return private.value;
    }
    
    public.validate = function()
    {
        
        if (private.isEmail)
        {
            var emailOk = public.checkEmail();
            if (!emailOk)
            {
                private.setEMessage('Value contains bad char.');
                return false;
            }
        }
        else
        {       
            if (private.validateTable)
            {
                var tableOk = public.checkTable();
                if (!tableOk)
                {
                    private.setEMessage('Value contains bad char.');
                    return false;
                }
            }
        }
        
        var lengthOk = public.checkLength();
        if (!lengthOk)
        {
            private.setEMessage('Bad string size. Empty field or larger then allowed.');
            return false;
        }
        
        var notEmptyOk = public.checkIfEmpty();
        if (!notEmptyOk)
        {
            private.setEMessage('Value contains empty string.');
            return false;
        }
        
        return true;
    }
     
    
    return public;
}


