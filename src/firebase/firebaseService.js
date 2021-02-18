import db from "./firebase";


class firebaseService {

    getData() {
        db.doc('test/petStore').onSnapshot(doc => {
            let data = JSON.parse(doc.data().data)
            return data
        })
    }
}

export default new firebaseService();

