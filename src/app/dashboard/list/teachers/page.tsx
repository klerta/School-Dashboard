import Pagination from "@/components/Pagination";
import TeableSearch from "@/components/TableSearch";
import Image from "next/image";

const TeacherListPage = ()=>{

    return(

        <div className="bg-white p-4 rouded-md flex-1 m-4 mt-0">
        {/* TOP */}
        <div className="flex items-center justify-between" >
            <h1 className="hidden md:block text-lg font-semibold" > All Teachers</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
               <TeableSearch/>
               <div className="flex items-center gap-4 self-end">
                <button className="w-8 h-8 items-center justify-center rounded-full bg-lamaYellow">
                    <Image src="/filter.png" alt="" width={14} height={14}/>
                </button>
                <button className="w-8 h-8 items-center justify-center rounded-full bg-lamaYellow">
                    <Image src="/sort.png" alt="" width={14} height={14}/>
                </button>
                <button className="w-8 h-8 items-center justify-center rounded-full bg-lamaYellow">
                    <Image src="/plus.png" alt="" width={14} height={14}/>
                </button>
               </div>
            </div>
        </div>
         {/* LIST */}
          {/* PAGINATION */}
            <Pagination/>
        </div>
        
    
    )
}

export default TeacherListPage;