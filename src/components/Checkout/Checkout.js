import React from 'react';
import './checkout.css';



const Checkout = () => 
        {
    return (

                <ul class="flex-container">
                    <li class="flex-item Buttons">                                      
                        <button class="button button1">IN</button>
                        <button class="button button2">UT</button>                    
                    </li>                    
                    <li class="flex-item">
                        <div class="AreYouSure">
                            <div class="innerdiv">
                                Är du säker på ditt val?
                                <p>
                                    <button class="button button1">&nbsp;Ja&nbsp;</button>
                                    <button class="button button4">Nej</button>
                                </p>                            
                            </div>
                            <form>
                                <label class="textfield1">
                                    <span>Ange orsak till att du lämnar mötet</span>
                                    <input type="text" name="Orsak" />
                                </label>
                                <input type="submit" value="Skicka" />
                            </form>
                        </div>
                    </li>                                    
                </ul>        
            );
        };
        

export default Checkout;