  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
  
  import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";




  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const firebaseConfig = {
    apiKey: "AIzaSyC3HMiXczV4ukZ7Zth1cPfW_9_0AHjeDqU",
    authDomain: "password-authentication-4c28f.firebaseapp.com",
    projectId: "password-authentication-4c28f",
    storageBucket: "password-authentication-4c28f.appspot.com",
    messagingSenderId: "786550540252",
    appId: "1:786550540252:web:c406f2fd4ba50d37d8f119",
    measurementId: "G-4NF0J0ZFZE"
  };

  const app = initializeApp(firebaseConfig);
  const db_Ref = getFirestore(app)

  const coll_Ref = collection(db_Ref, 'firestore-review')

  // console.log('Referência Data-Base init getDocs(app):', db_Ref)
  // console.log('Referência Data-Base init collection(db, name_Ref):', coll_Ref)

  // XXXXXXXXXXXXXXX ADD_DOC_SERVICE_FIRESTORE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  /*
  >>> Serviço do Firestore, 'addDoc' armazena dados em documentos em seguida em 'collections'; 'Cloud Firestore' cria 'collections' e 'documents' implicitamente a 1° vez que os dados são adicionados;

  >>> 'addDoc' cria um novo 'document' + 'new ID' dentro do collection referenciado(const coll_Ref = collection(db_Ref, 'firestore-review'));

  >>> A expressão 'addDoc(coll_Ref, {new_Field: 'new_Value'})' insere o novo objeto no 'collection' referenciado com um novo 'ID';

  >>> O processo que adiciona dados ao 'collection' retorna uma 'Promise' com os dados do documento;

  >>> A cada 'refresh' com 'F5' um novo 'document' é criado;
  */

  // const new_Collection = async () => {
  //   try {
  //     const jacaSnapshot = await addDoc(coll_Ref, {new_Field_Add_01: 'new_Value_Add_01'})

  //     console.log('Novo jacaSnapshot:', jacaSnapshot)
  //     console.log('Novo ID:', jacaSnapshot.id)

  //   } catch (e) {
  //     console.log(e.message)
  //   }
  // }
  // new_Collection()

  // XXXXXXXXXXXXXXX GET_DOC_SERVICE_FIRESTORE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  /*
  >>> É possível ver os dados do 'data-base' o 'Firebase console', ou usar o método 'getDocs' do Firestore;

  >>> Através de um 'Request' o conteúdo do collection é retornado, como Promise;

  >>> A 'Promise' é um 'querySnapshot' do 'collection' + properties para iterar pelos dados dos 'documents';

  >>> Encadeando à Promise retornada a property 'docs', o array pode ser iterado com métodos de array, os objetos inseridos nos 'documents' são retornados;

  >>> Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would;

  >>> Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs;
  */

  // const get_Collection = async () => {
  //   try {
  //     const jacaSnapshot = await getDocs(coll_Ref, 'firestore-review')
      
  //     console.log('Imagem do `collection`:', jacaSnapshot)
  //     jacaSnapshot.docs.filter((doc, index) => {
  //       const {new_Field_Add_01, first_field, second_field} = doc.data()
  //       // console.log('Proerty `doc.data()`:', doc.data())
  //       console.log(`Nome do ${index + 1}° Field: ${Object.keys(doc.data())}`)
  //       console.log(`Pares do ${index + 1}° object: ${Object.entries(doc.data())}`)

  //       // console.log(`Nome do 1° field: ${first_field}`)
  //       // console.log(`Nome do 2° field: ${second_field}`)
  //       // console.log(`Nome do 'NEW' field: ${new_Field_Add_01}`)
  //     })



  //   } catch (e) {
  //     console.log(e.message)
  //   }
  // }

  // get_Collection()


  // XXXXXXXXXXXXXXXXXXX POP_UP XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  const input_Login = document.querySelector('[data-js="div-login"]')
  const div_Form = document.querySelector('[data-js="div-form"]')
  const button_Log_Out = document.querySelector('[data-js="log-out"]')

  const open_Login = e => {
    input_Login.style.display = 'none'
    div_Form.style.display = 'inline-block'
  }

  const close_Login = e => {
    e.preventDefault()
    input_Login.style.display = 'flex'
    div_Form.style.display = 'none'
  }

  input_Login.addEventListener('click', open_Login)
  button_Log_Out.addEventListener('click', close_Login)