import { scheduleRows } from "../constants/schedule";

const ScheduleTable = () => {
  return (
                /*container*/
  <div className="overflow-x-auto rounded-xl border border-n-6/60 bg-n-8/80">
      <table className="min-w-full border-collapse text-sm">
                    {/*title*/}
        <thead className="bg-n-9/80">
                   {/*row*/}
          <tr className="text-left">
                         {/*creating the titles off table*/}
            <th className="px-4 py-3 border-b border-n-6/60">Week</th>
            <th className="px-4 py-3 border-b border-n-6/60">Date</th>
            <th className="px-4 py-3 border-b border-n-6/60">#</th>
            <th className="px-4 py-3 border-b border-n-6/60">Lecture</th>
            <th className="px-4 py-3 border-b border-n-6/60">Readings / Discussion</th>
            <th className="px-4 py-3 border-b border-n-6/60">Homework</th>
            <th className="px-4 py-3 border-b border-n-6/60">Project</th>
            <th className="px-4 py-3 border-b border-n-6/60">Event</th>
          </tr>
        </thead>
        <tbody>
                     {/*giving data to table(giving rows)*/}
          {scheduleRows.map((row, idx) => (
            <tr
              key={`${row.week}-${row.date}-${idx}`}
              className={idx % 2 === 0 ? "bg-n-8/60" : "bg-n-9/40"}
            >
              <td className="px-4 py-3 align-top border-b border-n-6/40">
                {row.week}
              </td>
              <td className="px-4 py-3 align-top border-b border-n-6/40 whitespace-nowrap">
                {row.date}
              </td>
         
              <td className="px-4 py-3 align-top border-b border-n-6/40">
                {row.lecturenumber ?? ""}
              </td>
              
         
              <td className="px-4 py-3 align-top border-b border-n-6/40">
                {row.lectureTitle}
              </td>
              <td className="px-4 py-3 align-top border-b border-n-6/40">
           <a target="_blank" href="#">
                {row.readings}
                {row.discussion && (
                  <div className="text-n-3 text-xs mt-1">
                    Discussion: {row.discussion}
                  </div>
         
                )} 
                  </a>
              </td>
              <td className="px-4 py-3 align-top border-b border-n-6/40">
             <a target="_blank" href={row.urlhomework}>   {row.homework}</a> 
              </td>
              <td className="px-4 py-3 align-top border-b border-n-6/40">
            <a target="_blank" href={row.urlproject}>   {row.project}</a> 
               </td>
              <td className="px-4 py-3 align-top border-b border-n-6/40">
               {row.event}   
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
