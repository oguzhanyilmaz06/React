import React, { Component } from "react";
import { CarService } from "../service/CarService";
import { Panel } from "primereact/panel";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Chart } from "primereact/chart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FullCalendar } from "primereact/fullcalendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      city: null,
      selectedCar: null,
      lineData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "#007be5",
          },
          {
            label: "Second Dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: "#20d077",
          },
        ],
      },
      cities: [
        { label: "Ankara", value: { id: 1, name: "Ankara", code: "NY" } },
        { label: "Bartın", value: { id: 2, name: "Bartin", code: "RM" } },
        { label: "İstanbul", value: { id: 3, name: "Istanbul", code: "LDN" } },
        { label: "Çayırlı", value: { id: 4, name: "Cayirli", code: "IST" } },
      ],
      fullcalendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultDate: "2017-02-01",
        header: {
          left: "prev,next today",
          center: "title",
          right: "month,agendaWeek,agendaDay",
        },
        editable: true,
      },
    };

    this.onTaskChange = this.onTaskChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.carservice = new CarService();
  }

  onTaskChange(e) {
    let selectedTasks = [...this.state.tasks];
    if (e.checked) selectedTasks.push(e.value);
    else selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

    this.setState({ tasks: selectedTasks });
  }

  onCityChange(e) {
    this.setState({ city: e.value });
  }

  componentDidMount() {
    this.carservice
      .getCarsSmall()
      .then((data) => this.setState({ cars: data }));
  }

  render() {
    return (
      <div className="p-grid p-fluid dashboard">
        <div className="p-col-12 p-lg-4">
          <div className="card summary">
            <span className="title">Kullanıcı</span>
            <span className="detail">Günlük Kullanıcı Sayısı</span>
            <span className="count visitors">10</span>
          </div>
        </div>
        <div className="p-col-12 p-lg-4"></div>
        <div className="p-col-12 p-lg-4">
          <div className="card summary">
            <span className="title">İzin</span>
            <span className="detail">Bugün İzinli Personel</span>
            <span className="count purchases">3</span>
          </div>
        </div>

        <div className="p-col-12 p-lg-6">
          <Panel header={"Duyurular"} style={{ height: "100%" }}>
            <ul className="activity-list">
              <li>
                <div className="count">Terfi</div>
                <div className="p-grid">
                  <div className="p-col-6">Ömer ALP</div>
                  <div className="p-col-6">
                    Yeni görevinde başarılar dileriz.
                  </div>
                </div>
              </li>
              <li>
                <div className="count" style={{ backgroundColor: "#f9c851" }}>
                  Etkinlik
                </div>
                <div className="p-grid">
                  <div className="p-col-6">30 Ağustos 2020 </div>
                  <div className="p-col-6">Happy Hours - Dilşem İnşaat</div>
                </div>
              </li>
            </ul>
          </Panel>
        </div>
 
        <div className="p-col-12 p-lg-4"></div>
        <div className="p-md-12 p-lg-4 p-fluid contact-form">
          <Panel header={"Menü"}>
            <div className="p-grid">
              <div className="p-col">
                {" "}
                <img src="https://sites.google.com/a/limak.com.tr/limak-portal/home/soup.png"></img>
                <p
                  style={{
                    marginTop: "-3em",
                    color: "#ffff",
                    padding: "3px",
                    width: "100px",
                  }}
                >
                  Köylü Çorba
                </p>
              </div>
              <div className="p-col">
                {" "}
                <img src="https://sites.google.com/a/limak.com.tr/limak-portal/home/maindish.png"></img>
                <p
                  style={{
                    marginTop: "-3em",
                    color: "#ffff",
                    padding: "3px",
                    width: "100px",
                  }}
                >
                  İsveç Köfte/Pat. tava
                </p>
              </div>
              <div className="p-col">
                {" "}
                <img src="https://sites.google.com/a/limak.com.tr/limak-portal/home/sidedish.png"></img>
                <p
                  style={{
                    marginTop: "-3em",
                    color: "#ffff",
                    padding: "3px",
                    width: "100px",
                  }}
                >
                  Pey. Yüksük Makarna
                </p>
              </div>
            </div>

            <div className="p-grid">
              <div className="p-col">
                {" "}
                <img src="https://sites.google.com/a/limak.com.tr/limak-portal/home/salad.png"></img>
                <p
                  style={{
                    marginTop: "-3em",
                    color: "#ffff",
                    padding: "3px",
                    width: "100px",
                  }}
                >
                  Niş Salata
                </p>
              </div>
              <div className="p-col">
                {" "}
                <img src="https://sites.google.com/a/limak.com.tr/limak-portal/home/fruit.png"></img>
                <p
                  style={{
                    marginTop: "-3em",
                    color: "#ffff",
                    padding: "3px",
                    width: "100px",
                  }}
                >
                  Erik
                </p>
              </div>
              <div className="p-col"></div>
            </div>
          </Panel>
        </div>

        <div className="p-col-12 p-md-6 p-lg-4 p-fluid contact-form">
          <Panel header="Bize Ulaşın">
            <div className="p-grid">
              <div className="p-col-12">
                <Dropdown
                  value={this.state.city}
                  options={this.state.cities}
                  placeholder="Şehir"
                  onChange={this.onCityChange}
                  autoWidth={false}
                />
              </div>
              <div className="p-col-12">
                <InputText type="text" placeholder="Ad Soyad" />
              </div>
              <div className="p-col-12">
                <InputText type="text" placeholder="Yaş" />
              </div>
              <div className="p-col-12">
                <InputText type="text" placeholder="Mesaj" />
              </div>
              <div className="p-col-12">
                <Button type="button" label="Gönder" icon="fa-send" />
              </div>
            </div>
          </Panel>
        </div>

        <div className="p-col-12 p-lg-4 contacts">
          <Panel header="Çalışanlarım">
            <ul>
              <li>
                <button className="p-link">
                  <img
                    src="assets/layout/images/avatar_1.png"
                    width="35"
                    alt="avatar1"
                  />
                  <span className="name">Sefa ALP</span>
                  <span className="email">Sefaalp@dilseminsaat.com</span>
                </button>
              </li>
              <li>
                <button className="p-link">
                  <img
                    src="assets/layout/images/avatar_2.png"
                    width="35"
                    alt="avatar2"
                  />
                  <span className="name">Hasan ALP</span>
                  <span className="email">Hasanalp@dilseminsaat.com</span>
                </button>
              </li>
              <li>
                <button className="p-link">
                  <img
                    src="assets/layout/images/avatar_3.png"
                    width="35"
                    alt="avatar3"
                  />
                  <span className="name">Ömer ALP </span>
                  <span className="email">AlpOmer@dilseminsaat.com</span>
                </button>
              </li>
            </ul>
          </Panel>
        </div>
      </div>
    );
  }
}
