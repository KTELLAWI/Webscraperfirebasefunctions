import * as admin from 'firebase-admin';
import {getApps} from 'firebase-admin/app';
// var serviceAccount = require("./key/serviceAccountKey.json");



if (!getApps().length){
    admin.initializeApp({
        credential:admin.credential.cert({
           
            projectId: "brightdata-2e86f",
            privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDjiqrzxNsC2a1s\nHN3e5BYYf9RYGOTx/Yx9etPLbbd5OTauirhC9T1DGteqWc5/5uLrsQ4oDKGOdXZ9\ncjz2awaXzN/Ttvm1RypgAOpCFvOe75ASXoXR+Zrm5h2u7trfUgDYWwWzcL0WpON4\nw7z4SQDYhHAjo6KMdbR66s7HhQd77GMsLec1M2Co/2v69Vw0sGR8HVYWDgR2oOln\ni45OesilC+jFtY70oTGvr1vNtnPeZCZBKnlHUF+LXtiqTaOfJ15fz8yZvKTlGjaf\nOYPyRJHzk+Tk6E9DjHfYA/Dxhe7kOFSU6KeTnONRZCRvDidrYXGrH86I9BZKtdM1\n4OFjeLcvAgMBAAECggEADf0PZ28Zu8IgHD5mEXbaOOVa65OUN6BLy8cKUD5NgkFX\nMEHM9CjZfE+hJJLi1BAgsTawVRv5rqVgBHRKdSe9PwXUWNKt5Uwbuc00mZ2JmqLF\nq6tt9KuwrzNEbeW3RPVooeRupEpxBXxbk6gM7QKn76essTQ1IQd3cfsPfUqbXC3d\ndkA7whwVvk0unZrLgXGfTqYp4Z89J6FNWOkxuovlnGpsL4TDLAVV095GxgggE72I\nodhJceFelqZ04cXMzhSTRqQ7rcMQdHRlBWpeL2LIRdmI/ayN4IdEy7MffExgfa1y\npQUhMM6S/IioEAPA2ktH+/MHu/PfoqFvskK3Isps+QKBgQD5EoG0Z8G/+bfLggym\nx7SO5wkPh8dOaPJFVvr8pb56+ymDpqfZf6Ph2Qo+C6bnzrilxNgVXMoY/cV+SQyL\nbxinFxW87qmUhIh1I8Y4Bu2xLZZtSnF1d/YwQEBEbPye5vicxmZlMHLqHYCz5gyf\nobUbsGHfwg5YzwoEFJMEdDZmuwKBgQDp3trFrwS7B2nhO4EBZ1ISsKAXjN7m7GwN\nlwsIPXD/ztyzqN+plsKcdDdHjB9MRrg/59Xl+HOQs8iHaiuEl+uOWdmeshSC+B7I\na4pzRArX1nWAzaRv3rP+16Bl1c/awXZXY0TNq2xSV237IqfihNoAwjDlP0QPCRrr\nK5JFCx38HQKBgD51B5Vnl0w+oHolyGpiFcLn6Hu+fpoI8we0QgfswBEyvjxHJDwE\nJ+JQfKMGZPon+mGHNPBWbk9KA6YhR0YHu9TakxbnehrGCTnmmKQgCKavWdNaIY1l\nYZTD59nAwrBOFvWpQrAJMCfI8icqfuvgrvuchU6I6PQYJtjTF/K7+ZBVAoGACkm+\ncAHSAHRECR93/lrQNnhEoqSUza3K1xI07wjc5rPv64tbQ3eZWg6Wu/QDEHTv+Ae3\n1iUG2G/AO4zFG1EfkKSNOTj2RAisOf7ZGVb97x7FDoR9Xlp6qpRLvw8X1LS8Av4f\n8bg/zKOB+BE/N2zGtk/UnNEaqlqpL308MwNZL1UCgYEA7seav0P06y/udgwvhw/y\nCpnJCmwiViyyniV7zojWMjeEsNn7eAeV5v2Se0pHMEtf7fxfSL7GUdSgzV1kdHK/\nYdhXU0oCtSaAXOIO9aL4267WmBuWSWgZRqHJkrvRNm9sSz0GmPGmTXEG1hsVgkWo\nJQsXiQkbreVCI45EcroXr5U=\n-----END PRIVATE KEY-----\n",
            clientEmail: "firebase-adminsdk-b0d49@brightdata-2e86f.iam.gserviceaccount.com",  
        }),

       


    });
}

const adminDb = admin.firestore();
export {adminDb};

