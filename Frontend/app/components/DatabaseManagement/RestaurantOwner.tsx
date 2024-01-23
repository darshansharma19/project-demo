'use client';

import React, { useEffect, useState } from 'react';

interface Restaurant_Owner {
    fieldName: string;
    dataType: string;
  }


const RestaurantOwner = () => {
   const entries: Restaurant_Owner[] = [
    { fieldName: "ToDo-date", dataType: "Datetime" },
    { fieldName: "ToDo_Name", dataType: "String" },
    { fieldName: "Uid", dataType: "String" },
    { fieldName: "ToDo_Description", dataType: "String" },
    { fieldName: "ToDoState", dataType: "Boolean" },
    { fieldName: "Completed_date", dataType: "Data_Time" },
    { fieldName: "Created_time", dataType: "string" },
    { fieldName: "Phone_number", dataType: "String" },
    { fieldName: "Phone_url", dataType: "Img_Path" },
  ];
  const [data, setData] = useState(entries);
  const [newField, setNewField] = useState<Restaurant_Owner>({
    fieldName: "",
    dataType: "",
  });
  const handleDelete = (index: number) => {
    setData((prev) => prev.filter((_, idx) => idx !== index));
  };
  const handleAdd = () => {
    // console.log(newField)
    setData((prev) => {
      return [...prev, newField];
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <div className="border-box max-w-full flex  justify-between items-center">
        <div className="text-[22px] font-[700]">Restaurant_Owner</div>
        <div className="flex min-w-[50%] flex-row justify-end gap-[10px] items-center">
          <button className="p-2 h-[36px] flex flex-row justify-around rounded-[5px] items-center bg-mediumblue dark:bg-mediumpurple text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 6C12 4.114 12 3.172 12.586 2.586C13.172 2 14.114 2 16 2H18C19.886 2 20.828 2 21.414 2.586C22 3.172 22 4.114 22 6V8C22 9.886 22 10.828 21.414 11.414C20.828 12 19.886 12 18 12H16C14.114 12 13.172 12 12.586 11.414C12 10.828 12 9.886 12 8V6Z"
                fill="white"
              />
              <path
                d="M10.5 7C8.943 7.005 8.117 7.054 7.586 7.586C7 8.172 7 9.114 7 11V13C7 14.437 7 15.327 7.26 15.928C7.33669 16.1093 7.44735 16.2743 7.586 16.414C8.172 17 9.114 17 11 17H13C14.886 17 15.828 17 16.414 16.414C16.946 15.883 16.995 15.057 16.999 13.5H15.911C15.045 13.5 14.251 13.5 13.606 13.413C12.895 13.318 12.143 13.093 11.526 12.475C10.907 11.857 10.682 11.105 10.586 10.395C10.5 9.749 10.5 8.955 10.5 8.09V7Z"
                fill="white"
              />
              <path
                d="M5.5 12C3.943 12.005 3.117 12.054 2.586 12.586C2 13.172 2 14.114 2 16V18C2 19.886 2 20.828 2.586 21.414C3.172 22 4.114 22 6 22H8C9.886 22 10.828 22 11.414 21.414C11.946 20.883 11.995 20.057 11.999 18.5H10.911C10.045 18.5 9.251 18.5 8.606 18.413C7.895 18.318 7.143 18.093 6.526 17.475C5.907 16.857 5.682 16.105 5.586 15.395C5.5 14.749 5.5 13.955 5.5 13.089V12Z"
                fill="white"
              />
            </svg>
            <span className="ml-2 text-[14px] font-[500]">Manage content</span>
          </button>
          <button className="flex items-center rounded-[5px] justify-center p-2 h-[36px] bg-mediumblue dark:bg-mediumpurple text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M17.5 9.25C17.5 9.84674 17.2629 10.419 16.841 10.841C16.419 11.2629 15.8467 11.5 15.25 11.5C14.6533 11.5 14.081 11.2629 13.659 10.841C13.2371 10.419 13 9.84674 13 9.25C13 8.65326 13.2371 8.08097 13.659 7.65901C14.081 7.23705 14.6533 7 15.25 7C15.8467 7 16.419 7.23705 16.841 7.65901C17.2629 8.08097 17.5 8.65326 17.5 9.25ZM17.5 15.25C17.5 15.8467 17.2629 16.419 16.841 16.841C16.419 17.2629 15.8467 17.5 15.25 17.5C14.6533 17.5 14.081 17.2629 13.659 16.841C13.2371 16.419 13 15.8467 13 15.25C13 14.6533 13.2371 14.081 13.659 13.659C14.081 13.2371 14.6533 13 15.25 13C15.8467 13 16.419 13.2371 16.841 13.659C17.2629 14.081 17.5 14.6533 17.5 15.25ZM17.5 21.25C17.5 21.8467 17.2629 22.419 16.841 22.841C16.419 23.2629 15.8467 23.5 15.25 23.5C14.6533 23.5 14.081 23.2629 13.659 22.841C13.2371 22.419 13 21.8467 13 21.25C13 20.6533 13.2371 20.081 13.659 19.659C14.081 19.2371 14.6533 19 15.25 19C15.8467 19 16.419 19.2371 16.841 19.659C17.2629 20.081 17.5 20.6533 17.5 21.25Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <span className=" text-slate-500"> Schema</span>
      <table className="min-w-full p-6 overflow-hidden">
        <thead className=" border-black text-slate-500 dark:border-white  border-b border-solid">
          <tr className="text-left">
            <th className="py-2 px-4 text-left text-slate-500 border-black dark:border-white  border-b border-solid ">
              Field Name
            </th>
            <th className="py-2 px-4 text-slate-500 border-black dark:border-white  border-b border-solid ">
              Data Types
            </th>
            <th className="py-2 px-4 border-black dark:border-white  border-b border-solid ">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((field, index) => (
            <tr key={index + Date.now()} className="text-left">
              <td className="py-2 px-4 text-left border-black dark:border-white  border-b  border-solid ">
                {field.fieldName}
              </td>
              <td className="py-2 px-4 text-left border-black dark:border-white  border-b border-solid ">
                {field.dataType}
              </td>
              <td className="py-2 px-4 text-left border-black dark:border-white  border-b border-solid ">
                <span onClick={() => handleDelete(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M23.75 5H19.375L18.125 3.75H11.875L10.625 5H6.25V7.5H23.75M7.5 23.75C7.5 24.413 7.76339 25.0489 8.23223 25.5178C8.70107 25.9866 9.33696 26.25 10 26.25H20C20.663 26.25 21.2989 25.9866 21.7678 25.5178C22.2366 25.0489 22.5 24.413 22.5 23.75V8.75H7.5V23.75Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-row dark:bg-black dark:text-white justify-between items-center px-12 text-[16px] font-[500]">
        <div className="flex flex-row justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
          >
            <path
              d="M0 0.625C0 0.45924 0.0658481 0.300269 0.183058 0.183058C0.300269 0.0658481 0.45924 0 0.625 0H14.375C14.5408 0 14.6997 0.0658481 14.8169 0.183058C14.9342 0.300269 15 0.45924 15 0.625C15 0.79076 14.9342 0.949731 14.8169 1.06694C14.6997 1.18415 14.5408 1.25 14.375 1.25H0.625C0.45924 1.25 0.300269 1.18415 0.183058 1.06694C0.0658481 0.949731 0 0.79076 0 0.625ZM0.625 6.25H14.375C14.5408 6.25 14.6997 6.18415 14.8169 6.06694C14.9342 5.94973 15 5.79076 15 5.625C15 5.45924 14.9342 5.30027 14.8169 5.18306C14.6997 5.06585 14.5408 5 14.375 5H0.625C0.45924 5 0.300269 5.06585 0.183058 5.18306C0.0658481 5.30027 0 5.45924 0 5.625C0 5.79076 0.0658481 5.94973 0.183058 6.06694C0.300269 6.18415 0.45924 6.25 0.625 6.25ZM8.75 10H0.625C0.45924 10 0.300269 10.0658 0.183058 10.1831C0.0658481 10.3003 0 10.4592 0 10.625C0 10.7908 0.0658481 10.9497 0.183058 11.0669C0.300269 11.1842 0.45924 11.25 0.625 11.25H8.75C8.91576 11.25 9.07473 11.1842 9.19194 11.0669C9.30915 10.9497 9.375 10.7908 9.375 10.625C9.375 10.4592 9.30915 10.3003 9.19194 10.1831C9.07473 10.0658 8.91576 10 8.75 10ZM15.625 10H14.375V8.75C14.375 8.58424 14.3092 8.42527 14.1919 8.30806C14.0747 8.19085 13.9158 8.125 13.75 8.125C13.5842 8.125 13.4253 8.19085 13.3081 8.30806C13.1908 8.42527 13.125 8.58424 13.125 8.75V10H11.875C11.7092 10 11.5503 10.0658 11.4331 10.1831C11.3158 10.3003 11.25 10.4592 11.25 10.625C11.25 10.7908 11.3158 10.9497 11.4331 11.0669C11.5503 11.1842 11.7092 11.25 11.875 11.25H13.125V12.5C13.125 12.6658 13.1908 12.8247 13.3081 12.9419C13.4253 13.0592 13.5842 13.125 13.75 13.125C13.9158 13.125 14.0747 13.0592 14.1919 12.9419C14.3092 12.8247 14.375 12.6658 14.375 12.5V11.25H15.625C15.7908 11.25 15.9497 11.1842 16.0669 11.0669C16.1842 10.9497 16.25 10.7908 16.25 10.625C16.25 10.4592 16.1842 10.3003 16.0669 10.1831C15.9497 10.0658 15.7908 10 15.625 10Z"
              fill="black"
            />
          </svg>
          <input
            placeholder="New Field name......."
            className='dark:bg-black dark:text-white focus:outline-none'
            value={newField.fieldName}
            onChange={(e) =>
              setNewField((prev) => {
                return { ...prev, fieldName: e.target.value };
              })
            }
          />
        </div>
        <div>
          <input
            placeholder="Data Type"
            className='dark:bg-black dark:text-white focus:outline-none'
            value={newField.dataType}
            onChange={(e) =>
              setNewField((prev) => {
                return { ...prev, dataType: e.target.value };
              })
            }
          />
        </div>
        <div>
          <input placeholder="Is List"  className='dark:bg-black dark:text-white focus:outline-none'/>
        </div>
        <div>
          <span className="cursor-pointer" onClick={() => handleAdd()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M26.25 8.7498L11.25 23.7498L4.375 16.8748L6.1375 15.1123L11.25 20.2123L24.4875 6.9873L26.25 8.7498Z"
                fill="#4500D8"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
 
export default RestaurantOwner;