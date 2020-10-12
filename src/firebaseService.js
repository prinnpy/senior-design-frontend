import db from "./firebase";


class firebaseService {

    getData() {
        db.doc('test/petStore').onSnapshot(doc => {
            console.log('GOT DATA', doc.data())
            let data = JSON.parse(doc.data().data)
            console.log(data)

            return doc.data()
        })
    }
}

export default new firebaseService();

