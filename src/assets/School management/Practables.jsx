import DataTable from 'react-data-table-component';
import { useState } from 'react';


function Practables() {
const columns = [
	{
		name: 'Title',
		selector: row => row.title,
        sortable:true
	},
	{
		name: 'Year',
		selector: row => row.year,
        sortable:true
	},
];


const data = [
  	{
		id: 1,
		title: 'Beetlejuice',
		year: '1988',
	},
	{
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
	},
]

const [records,setrecords] = useState(data)

function searching (event) {
     const newData = data.filter(row => {
        return row.name.toLowerCase().includes(event.target.value.toLowerCase())
     })
     setrecords(newData)
}
	return (
        <div >
            <div className='text-end'> <input type="text" onChange={searching}/></div>
<DataTable
			columns={columns}
			data={records}
            selectableRows
		/>
        </div>
		
	);
};

export default Practables