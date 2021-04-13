import crypto from 'crypto';

class Hashes {

    public hashPassword(user:string, password:string){
        let result:any = user.toUpperCase().trim() + password.toUpperCase().trim();
        return crypto.createHash('sha1', result.toUpperCase().trim());
    }

    public hashRandom() {
        let numberRandom:any = Math.floor(Math.random() * 1000000) + 17;
        return numberRandom;
        //return crypto.createHash('sha256', numberRandom.toString());
    }

}

export default new Hashes();