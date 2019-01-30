import React, { Component } from "react";
import { decorate, observable, observe, toJS } from "mobx";
import { observer } from "mobx-react";
import { render } from "react-dom";
//import "./index.scss";

const addStyleString = (str) => {
  var node = document.createElement('style');
  node.innerHTML = str;
  document.body.appendChild(node);
}

class Store {
  isLoading = true;
  isLoggedin = true;
  fill_auto = false;
  start = false;
  success = false;
  showTable = false
  first_name = "seddik";
  last_name = "benzemame";
  date_of_birth = "1990-06-22";
  email = "seddik.benz.dev@gmail.com";
  phone_code = "213";
  phone = "540055010";
  nationality = "62";
  passport_type = "01";
  passport_no = "54687685454";
  ppt_issue_date = "487687687";
  ppt_expiry_date = "5446546";
  ppt_issue_palace = "54654654";
  juridiction = "15#Bordj-Bou-Arr�ridj#10";
  visa_no = "44";
  visa_type = "207";
  veryfication_code = "";
}

decorate(Store, {
  selected: observable,
  users: observable,
  isLoading: observable,
  isLoggedin: observable,
  fill_auto: observable,
  success: observable,
  start: observable,
  showTable: observable,
  first_name: observable,
  last_name: observable,
  date_of_birth: observable,
  email: observable,
  juridiction: observable,
  phone_code: observable,
  phone: observable,
  nationality: observable,
  passport_type: observable,
  passport_no: observable,
  ppt_issue_date: observable,
  ppt_expiry_date: observable,
  ppt_issue_palace: observable,
  visa_no: observable,
  visa_type: observable,
  veryfication_code: observable
});

const appStore = new Store();

const disposer = observe(appStore, (change) => {
  console.log(change.type, change.name, "from", change.oldValue, "to", change.object[change.name]);
})

class Table extends Component {
  _onDoubleClick(value) {
    let p = prompt("enter new value:")
    if (p !== '') {
      value = p
    }
  }
  render() {
    const { store } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }} >
        <h3>double click to edit</h3>
        <div style={{ border: '1px solid #000', height: 24 }} onDoubleClick={() => store.first_name = prompt("Enter new value")} >first_name: {store.first_name}</div>
        <div style={{ border: '1px solid #000', height: 24 }} onDoubleClick={() => store.last_name = prompt("Enter new value")} >last_name: {store.last_name}</div>
        <div style={{ border: '1px solid #000', height: 24 }} onDoubleClick={() => store.date_of_birth = prompt("Enter new value")}>date_of_birth: {store.date_of_birth}</div>
        <div style={{ border: '1px solid #000', height: 24 }} onDoubleClick={() => store.email = prompt("Enter new value")}>email: {store.email}</div>
        <div style={{ border: '1px solid #000', height: 24 }} onDoubleClick={() => store.phone = prompt("Enter new value")}>phone: {store.phone}</div>
        <div style={{ border: '1px solid #000', height: 24 }}>
          <select
            value={store.passport_type}
            onChange={e => (store.passport_type = e.target.value)}
            placeholder="passportType"
          >
            <option value="02">Collective passport</option>
            <option value="13">D. Viaje Apatridas C. New York</option>
            <option value="04">Diplomatic passport</option>
            <option value="06">Government official on duty</option>
            <option value="10">National laissez-passer</option>
            <option value="14">Official passport</option>
            <option value="01">Ordinary passport</option>
            <option value="08">Passport of foreigners</option>
            <option value="03">Protection passport</option>
            <option value="12">Refugee Travel Document (Geneva Convention)</option>
            <option value="16">Seaman’s book</option>
            <option value="05">Service passport</option>
            <option value="07">Special passport</option>
            <option value="11">UN laissez-passer</option>
          </select>
        </div>
        <div style={{ border: '1px solid #000', height: 24 }} onDoubleClick={() => store.passport_no = prompt("Enter new value")}>passport_no: {store.passport_no}</div>
        <div style={{ border: '1px solid #000', height: 24 }} onDoubleClick={() => store.ppt_issue_date = prompt("Enter new value")}>ppt_issue_date: {store.ppt_issue_date}</div>
        <div style={{ border: '1px solid #000', height: 24 }} onDoubleClick={() => store.ppt_expiry_date = prompt("Enter new value")}>ppt_expiry_date: {store.ppt_expiry_date}</div>
        <div style={{ border: '1px solid #000', height: 24 }} onDoubleClick={() => store.ppt_issue_palace = prompt("Enter new value")}>ppt_issue_palace {store.ppt_issue_palace}</div>
        <div style={{ border: '1px solid #000', height: 24 }} >
          <select
            placeholder="juridiction"
            value={store.juridiction}
            onChange={e => (store.juridiction = e.target.value)}
          >
            <option value="14#Adrar#9">Adrar</option>
            <option value="14#A�n Temouchent Y Relizane#9">Aïn Temouchent Y Relizane</option>
            <option value="15#Ain-Defla#10">Ain-Defla</option>
            <option value="15#Algiers#10">Algiers</option>
            <option value="15#Annaba#10">Annaba</option>
            <option value="15#Batna#10">Batna</option>
            <option value="14#B�char#9">Béchar</option>
            <option value="15#B�jaia#10">Béjaia</option>
            <option value="15#Biskra#10">Biskra</option>
            <option value="15#Blida#10">Blida</option>
            <option value="15#Bordj-Bou-Arr�ridj#10">Bordj-Bou-Arréridj</option>
            <option value="15#Bouira#10">Bouira</option>
            <option value="15#Boumerd�s#10">Boumerdés</option>
            <option value="14#Chlef#9">Chlef</option>
            <option value="15#Constantine#10">Constantine</option>
            <option value="15#Djelfa#10">Djelfa</option>
            <option value="14#El Bayadh#9">El Bayadh</option>
            <option value="15#El Oued, El Tarf#10">El Oued, El Tarf</option>
            <option value="15#Gharda�a#10">Ghardaïa</option>
            <option value="15#Guelma#10">Guelma</option>
            <option value="15#Illizi#10">Illizi</option>
            <option value="15#Jijel#10">Jijel</option>
            <option value="15#Khenchela#10">Khenchela</option>
            <option value="15#Laghouart#10">Laghouart</option>
            <option value="15#M'sila#10">M'sila</option>
            <option value="14#Mascara#9">Mascara</option>
            <option value="15#M�d�a#10">Médéa</option>
            <option value="15#Mila#10">Mila</option>
            <option value="14#Mostaganem#9">Mostaganem</option>
            <option value="14#Na�ma#9">Naâma</option>
            <option value="14#Oran#9">Oran</option>
            <option value="15#Ouargla#10">Ouargla</option>
            <option value="15#Oum El Bouaghi#10">Oum El Bouaghi</option>
            <option value="14#Sa�da#9">Saïda</option>
            <option value="15#S�tif#10">Sétif</option>
            <option value="14#Sidi Bel-Abbes#9">Sidi Bel-Abbes</option>
            <option value="15#Skikda#10">Skikda</option>
            <option value="15#Souk Ahras#10">Souk Ahras</option>
            <option value="15#Tamanrasset#10">Tamanrasset</option>
            <option value="15#Tebessa#10">Tebessa</option>
            <option value="14#Tiaret#9">Tiaret</option>
            <option value="15#Tindouf#10">Tindouf</option>
            <option value="15#Tipaza#10">Tipaza</option>
            <option value="14#Tissemsilt#9">Tissemsilt</option>
            <option value="15#Tizi-Ouzou#10">Tizi-Ouzou</option>
            <option value="14#Tlemcen#9">Tlemcen</option>
          </select>
        </div>
        <div style={{ border: '1px solid #000', height: 24 }} onDoubleClick={() => store.visa_no = prompt("Enter new value")}>visa_no: {store.visa_no}</div>
        <div style={{ border: '1px solid #000', height: 24 }}>
          <select
            value={store.visa_type}
            onChange={e => (store.visa_type = e.target.value)}
            placeholder="VisaTypeId"
          >
            <option value="207">Tourism</option>
            <option value="208">Business</option>
            <option value="209">Students /Study</option>
            <option value="210">Transit</option>
            <option value="211">Sport/Culture</option>
            <option value="212">Medical</option>
            <option value="213">Family</option>
            <option value="214">Mission</option>
          </select>
        </div>
      </div>
    );
  }
}
Table = observer(Table);



class App extends Component {
  componentDidMount() {
    addStyleString(`
      body{
        position: relative;
      }
    `)
    this.init()
  }
  init = () => {
    $(".popupBG-app").hide();
    $("#IDBodyPanelapp").hide();
  }
  _onStart = () => {
    if (appStore.start) {
      // do to stope
      appStore.start = false
    } else {
      // do start
      appStore.start = true
    }
  }
  _fill = () => {
    // do fill data
  }
  _codeChange = (e) => {
    appStore.veryfication_code = e.target.value
    appStore.start = false
  }
  render() {
    return (
      <div style={{
        position: 'fixed',
        zIndex: 100000,
        right: 10,
        top: 10,
        width: 350,
        backgroundColor: appStore.success ? 'lightgreen' : '#ffeb3b',
        borderRadius: 10,
        padding: 10,
        opacity: 0.95,
        display: 'flex',
        flexDirection: 'column'
      }} id="reactAppDiv">
        <input type='text' placeholder='veryfication_code' value={appStore.veryfication_code} onChange={this._codeChange} />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button style={{ flex: 1 }} onClick={this._fill}>fill data</button>
          <button style={{ flex: 1, backgroundColor: appStore.start ? '#d8e647' : '#eaaeae' }} onClick={this._onStart}>{appStore.start ? 'click to stop' : 'click to start'}</button>
        </div>
        <hr />
        <span onClick={() => appStore.showTable = !appStore.showTable} style={{ alignSelf: 'center', cursor: 'pointer' }}>{appStore.showTable ? '🡅' : '🡇'}</span>
        {
          appStore.showTable === true &&
          <Table store={appStore} />
        }
      </div>
    );
  }
}
App = observer(App)
export default App