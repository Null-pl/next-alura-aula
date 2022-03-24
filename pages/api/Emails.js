import { Mails } from "../../Data/Mails"

function Emials(request, response){
    
    response.json(Mails)

}

export default Emials