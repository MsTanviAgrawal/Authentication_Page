
import TryCatch from "../middleware/TryCatch.js"
import sanitize from "mongo-sanitize"; 
import { registerSchema } from "../config/zod.js";

export const registerUser = TryCatch(async(req,res)=>{
    const sanatizedBody = sanitize(req.body);
    const validation = registerSchema.safeParse(sanatizedBody);

    if(!validation.success){
        const zodError = validation.error;

        return res.status(400).json({
            message: zodError,
            // message: "Validation error"
            // message: error.message
        })
    }

    const {name,email,password} = validation.data;
    // const {name,email,password} = sanitize(req.body);

    res.json({
        name,
        email,
        password,
    });
 });

