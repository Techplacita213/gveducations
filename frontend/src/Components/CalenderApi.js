import React from 'react';
import RoundButton from './RoundButton'

async function req(gapi,event){
 
    var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event,
      })
     
    request.execute(event => {
        window.open(event.htmlLink)
        const eid=event.htmlLink.split("=")[1]
        alert(eid)
        var eventPatch = {
            conferenceData: {
                createRequest: {requestId: "7qxalsvy0e"}
            }
        };
       
        gapi.client.calendar.events.patch({
        calendarId: "primary",
        eventId: event.id,
        resource: eventPatch,
        sendNotifications: true,
        conferenceDataVersion: 1
        }).execute(function(event) {
        console.log("Conference created for event: %s", event.htmlLink);
        });
    })
    
}

function Calender() {

  var gapi = window.gapi
  /* 
    Update with your own Client Id and Api key 
  */
  var CLIENT_ID = "489245117793-mqnf3kfckfr679gfc3t3du2kbof9r1ug.apps.googleusercontent.com"
  var API_KEY = "AIzaSyAvbl-ak_lo7b6qRHdbBT0L3ugFmTU41RU"
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"

  const handleClick = async () => {
    gapi.load('client:auth2',async () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))
      var eid;
      await gapi.auth2.getAuthInstance().signIn()
      .then(async() => {
        
        var event = {
          'summary': 'Awesome Event!',
          'location': '800 Howard St., San Francisco, CA 94103',
          'description': 'Really great refreshments',
          'start': {
            'dateTime': '2020-06-28T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'end': {
            'dateTime': '2020-06-28T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
            {'email': '19141@iiitu.ac.in'},
            {'email': '19148@iiitu.ac.in'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        }

        req(gapi,event).then(eid=>{
            
        })
   
        
        /*
            Uncomment the following block to get events
        */
        /*
        // get events
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(response => {
          const events = response.result.items
          console.log('EVENTS: ', events)
        })
        */
    

      })
     
      
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <RoundButton func={handleClick}>Add Event</RoundButton>
      </header>
    </div>
  );
}

export default Calender;