mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

(function () {
    var formatDate = mobiscroll.util.datetime.formatDate;
    var currentEvent;
    var timer;
    var tooltip = document.getElementById('custom-event-tooltip-popup');
    var deleteButton = document.getElementById('tooltip-event-delete');
    var fileButton = document.getElementById('tooltip-event-view');
    var statusButton = document.getElementById('tooltip-event-status');
    var header = document.getElementById('tooltip-event-header');
    var data = document.getElementById('tooltip-event-name-age');
    var time = document.getElementById('tooltip-event-time');
    var status = document.getElementById('tooltip-event-title');
    var reason = document.getElementById('tooltip-event-reason');
    var loc = document.getElementById('tooltip-event-location');

    var calendar = mobiscroll.eventcalendar('#demo-custom-event-tooltip', {
        view: {
            calendar: {
                type: 'week'
            }
        },
        height: 260,
        data: [{
            title: 'Jude Chester',
            age: 69,
            start: '2023-09-23T08:00',
            end: '2023-09-23T09:00',
            confirmed: false,
            reason: 'Headaches morning & afternoon',
            location: 'Topmed, Building A, Room 203',
            color: '#b33d3d'
        }, {
            title: 'Leon Porter',
            age: 44,
            start: '2023-09-23T09:00',
            end: '2023-09-23T10:00',
            confirmed: false,
            reason: 'Left abdominal pain',
            location: 'Topmed, Building D, Room 360',
            color: '#b33d3d'
        }, {
            title: 'Lily Racquel',
            age: 54,
            start: '2023-09-23T10:00',
            end: '2023-09-23T11:00',
            confirmed: true,
            reason: 'Dry, persistent cough & headache',
            location: 'Procare, Building C, Room 12',
            color: '#309346'
        }, {
            title: 'Mia Sawyer',
            age: 59,
            start: '2023-09-23T11:00',
            end: '2023-09-23T12:00',
            confirmed: true,
            reason: 'Difficulty sleeping & loss of appetite',
            location: 'Procare, Building C, Room 12',
            color: '#309346'
        }, {
            title: 'Jon Candace',
            age: 63,
            start: '2023-09-23T12:00',
            end: '2023-09-23T13:00',
            confirmed: true,
            reason: 'Nausea & weakness',
            location: 'MedStar, Building A, Room 1',
            color: '#c77c0a'
        }, {
            title: 'Layton Drake',
            age: 57,
            start: '2023-09-23T13:00',
            end: '2023-09-23T14:00',
            confirmed: true,
            reason: 'Headaches & loss of appetite',
            location: 'Vitalife, Room 160',
            color: '#c77c0a'
        }, {
            title: 'Willis Kane',
            age: 44,
            start: '2023-09-24T08:00',
            end: '2023-09-24T09:00',
            confirmed: true,
            reason: 'Back pain',
            location: 'Care Cente, Room 320r',
            color: '#b33d3d'
        }, {
            title: 'Theo Calanthia',
            age: 60,
            start: '2023-09-24T09:00',
            end: '2023-09-24T10:00',
            confirmed: true,
            reason: 'Anxiousness & sleeping disorder',
            location: 'Care Center, Room 320',
            color: '#b33d3d'
        }, {
            title: 'Ford Kaiden',
            age: 53,
            start: '2023-09-24T14:00',
            end: '2023-09-24T15:00',
            confirmed: true,
            reason: 'Nausea & vomiting',
            location: 'Care Center, Room 206',
            color: '#b33d3d'
        }, {
            title: 'Gerry Irma',
            age: 50,
            start: '2023-09-24T13:00',
            end: '2023-09-24T14:00',
            confirmed: false,
            reason: 'Fever & sore throat',
            location: 'Medica Zone, Building C, Room 2',
            color: '#c77c0a'
        }, {
            title: 'Carlyn Dorothy',
            age: 36,
            start: '2023-09-24T14:00',
            end: '2023-09-24T15:00',
            confirmed: true,
            reason: 'Tiredness & muscle pain',
            location: 'Medica Zone, Building C, Room 2',
            color: '#c77c0a'
        }, {
            title: 'Alma Potter',
            age: 74,
            start: '2023-09-22T10:00',
            end: '2023-09-22T11:00',
            confirmed: true,
            reason: 'High blood pressure',
            location: 'Vitacure, Building D, Room 2',
            color: '#b33d3d'
        }, {
            title: 'Debra Aguilar',
            age: 47,
            start: '2023-09-22T11:00',
            end: '2023-09-22T12:00',
            confirmed: false,
            reason: 'Fever & sore throat',
            location: 'Vitacure, Building D, Room 2',
            color: '#b33d3d'
        }, {
            title: 'Marjorie White',
            age: 55,
            start: '2023-09-22T13:00',
            end: '2023-09-22T14:00',
            confirmed: true,
            reason: 'Back pain',
            location: 'Vitacure, Building D, Room 2',
            color: '#b33d3d'
        }, {
            title: 'Lora Wilson',
            age: 66,
            start: '2023-09-22T15:00',
            end: '2023-09-22T16:00',
            confirmed: false,
            reason: 'Fever & headache',
            location: 'Vitacure, Building D, Room 2',
            color: '#b33d3d'
        }, {
            title: 'Christie Baker',
            age: 71,
            start: '2023-09-22T10:00',
            end: '2023-09-22T11:00',
            confirmed: true,
            reason: 'Headaches morning & afternoon',
            location: 'Care Center, Room 300',
            color: '#309346'
        }, {
            title: 'Arlene Lyons',
            age: 41,
            start: '2023-09-22T14:00',
            end: '2023-09-22T15:00',
            confirmed: true,
            reason: 'Nausea & weakness',
            location: 'Care Center, Room 202',
            color: '#c77c0a'
        }, {
            title: 'Dory Edie',
            age: 45,
            start: '2023-09-21T09:00',
            end: '2023-09-21T10:00',
            confirmed: true,
            reason: 'Right abdominal pain',
            location: 'Vitacure, Building A, Room 203',
            color: '#309346'
        }, {
            title: 'Kaylin Toni',
            age: 68,
            start: '2023-09-21T10:00',
            end: '2023-09-21T11:00',
            confirmed: true,
            reason: 'Itchy, red rashes',
            location: 'Vitacure, Building A, Room 203',
            color: '#309346'
        }, {
            title: 'Gray Kestrel',
            age: 60,
            start: '2023-09-21T12:00',
            end: '2023-09-21T13:00',
            confirmed: true,
            reason: 'Cough & fever',
            location: 'Vitacure, Building A, Room 203',
            color: '#309346'
        }, {
            title: 'Lou Andie',
            age: 76,
            start: '2023-09-21T15:00',
            end: '2023-09-21T16:00',
            confirmed: true,
            reason: 'High blood pressure',
            location: 'Medica Zone, Room 13',
            color: '#309346'
        }, {
            title: 'Yancy Dustin',
            age: 52,
            start: '2023-09-21T10:00',
            end: '2023-09-21T11:00',
            confirmed: true,
            reason: 'Fever & headache',
            location: 'Vitacure, Building E, Room 50',
            color: '#c77c0a'
        }, {
            title: 'Terry Clark',
            age: 78,
            start: '2023-09-21T11:00',
            end: '2023-09-21T12:00',
            confirmed: true,
            reason: 'Swollen ankles',
            location: 'Vitacure, Building E, Room 50',
            color: '#c77c0a'
        }],
        clickToCreate: false,
        dragToCreate: false,
        showEventTooltip: false,
        onEventHoverIn: function (args, inst) {
            var event = args.event;
            var eventTime = formatDate('hh:mm A', new Date(event.start)) + ' - ' + formatDate('hh:mm A', new Date(event.end));
            var button = {};

            currentEvent = event;

            if (event.confirmed) {
                button.text = 'Cancel appointment';
                button.type = 'warning';
            } else {
                button.text = 'Confirm appointment';
                button.type = 'success';
            }

            header.style.backgroundColor = event.color;
            data.innerHTML = event.title + ', Age: ' + event.age;
            time.innerHTML = eventTime;
            status.innerHTML = event.confirmed ? 'Confirmed' : 'Canceled';
            reason.innerHTML = event.reason;
            loc.innerHTML = event.location;

            statusButton.innerHTML = button.text;
            mobiscroll.getInst(statusButton).setOptions({ color: button.type });

            clearTimeout(timer);
            timer = null;

            tooltip.setOptions({ anchor: args.domEvent.target });
            tooltip.open();
        },
        onEventHoverOut: function (args) {
            if (!timer) {
                timer = setTimeout(function () {
                    tooltip.close();
                }, 200);
            }
        },
        onEventClick: function (event, inst) {
            tooltip.open();
        }
    });

    var tooltip = mobiscroll.popup('#custom-event-tooltip-popup', {
        display: 'anchored',
        touchUi: false,
        showOverlay: false,
        contentPadding: false,
        closeOnOverlayClick: false,
        width: 350,
        onInit: function () {
            tooltip.addEventListener('mouseenter', function (e) {
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
            });

            tooltip.addEventListener('mouseleave', function () {
                timer = setTimeout(function () {
                    tooltip.close();
                }, 200);
            });
        }
    });


    statusButton.addEventListener('click', function () {
        tooltip.close();
        currentEvent.confirmed = !currentEvent.confirmed;
        calendar.updateEvent(currentEvent);

        mobiscroll.toast({            message: 'Appointment ' + (currentEvent.confirmed ? 'confirmed' : 'canceled')
        });
    });

    fileButton.addEventListener('click', function () {
        tooltip.close();

        mobiscroll.toast({            message: 'View file'
        });
    });

    deleteButton.addEventListener('click', function () {
        calendar.removeEvent(currentEvent);

        tooltip.close();

        mobiscroll.toast({
            message: 'Appointment deleted'
        });
    });

})()