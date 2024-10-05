import bcrypt from 'bcrypt';
import User from "../model/UserModel.js"
/**Post : http://localhost:8080/api/register*/

export async function register(req, res) {
    try {
        const { username, password, email, profile } = req.body;

        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            console.log('Username already exists:', username);
            return res.status(400).json({ error: "Username already exists" });
        }

        // Check if the email already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            console.log('Email already exists:', email);
            return res.status(400).json({ error: "Email already exists" });
        }

        if (password) {
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user
            const newUser = new User({
                username,
                password: hashedPassword,
                profile: profile || '',
                email
            });

            // Save the user to the database
            await newUser.save();
            return res.status(201).json({ msg: "User Registered Successfully" });
        } else {
            return res.status(400).json({ error: "Password is required" });
        }
    } catch (error) {
        console.error("Error in register function:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception thrown:', error);
    // Application specific logging, throwing an error, or other logic here
    process.exit(1); // Exit process with failure
});


/**post */
export async function login(req,res){
    res.json('login route');
}

/**get */
export async function getUser(req,res){
    res.json('register route');
}


/**put */
export async function updateUser(req,res){
    res.json('register route');
}


/**GET */

export async function generateOTP(req,res){
    res.json('generateOTP route');
}


/**GET */
export async function verifyOTP(req,res){
    res.json('verifyOTP route');
}


/**GET */
export async function createResetSession(req,res){
    res.json('verifyOTP route');
}
 

/**put */
export async function resetPassword(req,res){
    res.json('resetPassword route');
}