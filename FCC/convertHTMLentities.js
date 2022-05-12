/**
 * Convert HTML Entities
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
 * in a string to their corresponding HTML entities.
 */


function convertHTML(str) {

    /**
     *  & = &amp;
     *  < = &lt;
     *  > = &gt;
     *  "" = &quot;
     *  ' = &apos;
     */
    
    console.log(str)
    console.log()
    
    if(/["'<>&]/.test(str)){
      if(/["]/.test(str)){
        while(/["]/.test(str)){
          console.log(str.replace('"', "&quot;"))
          str = str.replace('"', "&quot;")
        }
        return str
      }else if(/[']/.test(str)){
        while(/[']/.test(str)){
          console.log(str.replace("'", "&apos;"))
          str = str.replace("'", "&apos;")
        }
        return str
      }else if(/[<>]/.test(str)){
        while(/[<>]/.test(str)){
          str = str.replace(">", "&gt;")
          str = str.replace("<", "&lt;")
        }
        console.log(str)
        return str
      }else if(/[&]/.test(str)){
          str = str.replace("&", "&amp;")
        return str
      }
    }
    return str
  }
  
  // convertHTML('Stuff in "quotation marks"')
  // convertHTML("Schindler's List")
  // convertHTML("<>");
  // convertHTML("Dolce & Gabbana")
  convertHTML("abc")
  
  
  