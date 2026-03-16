let emailRegex = /^\S+@\S+\.\S+$/;

class ValidationHelper{

    static IsEmail(value){
        return emailRegex.test(value)
    }

    static IsEmpty(value) {
        return value.length === 0;
    }

}

export default ValidationHelper;