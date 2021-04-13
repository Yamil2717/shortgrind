class Data {

    userData = {};
    
    setValue (index, value) {
        this.userData[index] = value;
    }

    getValue (value) {
        return this.userData[value];
    }

    getAllValue () {
        return this.userData;
    }
    
}

export default new Data();