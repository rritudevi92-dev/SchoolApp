const users = [];

exports.signup = (req, res) => {
    const { name, email, password, role } = req.body;

    users.push({
        id: users.length + 1,
        name,
        email,
        password,
        role
    });

    res.json({
        success: true,
        message: "User Registered Successfully"
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Invalid Email or Password"
        });
    }

    res.json({
        success: true,
        user
    });
};
