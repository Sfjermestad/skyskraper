import React from 'react'
import './tour.css'

function tour() {
    return (
        <div className='tour'>
            <div id='header'>Tourdates</div>
            
            <table id='tour-table'>
                <tbody>
                    <tr>
                        <td>06.07.2021</td>
                        <td>Skjærgårds music and mission</td>
                        <td><a href="https://sgmm.no/billetter">Tickets</a></td>
                    </tr>
                </tbody>
            </table>
            <div id="booking">Please <a href="mailto:contact@skyskraperband.com">contact us</a> for booking</div>
        </div>
    )
}

export default tour