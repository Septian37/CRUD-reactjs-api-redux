const UserValidation = (values) => {
    const errors = {};

    if(!values.name || values.name === "") {
        errors.name = "Name must be input";
    }

    if(!values.address || values.address === "") {
        errors.address = "Address must be input";
    }

    if(!values.age || values.age === "") {
        errors.age = "Age must be input";
    }

    if(!values.phone || values.phone === "") {
        errors.phone = "Phone must be input";
    }

    return errors;
};

export default UserValidation;
