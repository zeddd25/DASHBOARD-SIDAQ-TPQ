import { BiBook } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Buat ref untuk setiap input tanggal dan waktu
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const startTimeRef = useRef(null);
  const endTimeRef = useRef(null);

  // Fungsi untuk inisialisasi flatpickr setelah komponen dipasang
  useEffect(() => {
    flatpickr(startDateRef.current, {
      enableTime: false,
      dateFormat: "Y-m-d",
    });
    flatpickr(endDateRef.current, {
      enableTime: false,
      dateFormat: "Y-m-d",
    });
    flatpickr(startTimeRef.current, {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
    });
    flatpickr(endTimeRef.current, {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
    });
  }, []);

  const isFormValid = () => {
    return (
      newTask.trim() !== "" &&
      startDateRef.current.value !== "" &&
      endDateRef.current.value !== "" &&
      startTimeRef.current.value !== "" &&
      endTimeRef.current.value !== ""
    );
  };

  const addTask = () => {
    if (isFormValid()) {
      const task = {
        text: newTask,
        startDate: startDate,
        endDate: endDate,
        startTime: startTime,
        endTime: endTime,
        completed: false,
      };
      setTasks([...tasks, task]);
      setNewTask("");
      setStartDate("");
      setEndDate("");
      setStartTime("");
      setEndTime("");
    } else {
      toast.error("Semua inputan harus diisi!!!", { toastId: "error" });
    }
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="h-screen w-full flex flex-col  font-poppins">
      <div className="bg-white rounded-lg shadow p-6  w-full">
        <div className="flex items-center mb-4">
          <BiBook className="text-teal-500 text-4xl mr-2" />
          <h1 className="text-gray-800 text-2xl font-semibold">
            Andaru!! Tugas Apa Yang Akan Kamu Selesaikan???
          </h1>
        </div>
        <div className="flex mt-4">
          <input
            className="ring-1 ring-green-400 shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-600 outline-none"
            placeholder="Tambahkan Tugas"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            type="text"
            className="ring-1 ring-green-400 shadow appearance-none border rounded w-1/4 py-2 px-3 mr-4 text-gray-600 outline-none"
            placeholder="Tanggal Mulai"
            ref={startDateRef}
          />
          <input
            type="text"
            className="ring-1 ring-green-400 shadow appearance-none border rounded w-1/4 py-2 px-3 mr-4 text-gray-600 outline-none"
            placeholder="Tanggal Selesai"
            ref={endDateRef}
          />
          <input
            type="text"
            className="ring-1 ring-green-400 shadow appearance-none border rounded w-1/4 py-2 px-3 mr-4 text-gray-600 outline-none"
            placeholder="Jam Mulai"
            ref={startTimeRef}
          />
          <input
            type="text"
            className="ring-1 ring-green-400 shadow appearance-none border rounded w-1/4 py-2 px-3 mr-4 text-gray-600 outline-none"
            placeholder="Jam Selesai"
            ref={endTimeRef}
          />

          <button
            className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500"
            onClick={addTask}
          >
            Tambahkan
          </button>
        </div>
      </div>
      {tasks.length === 0 ? (
        <div className="text-gray-600 text-xl mt-4">
          Belum ada tugas yang ditambahkan.
        </div>
      ) : (
        <div className="rounded my-4 w-full flex flex-col gap-4">
          {tasks.map((task, index) => (
            <div
              className={`shadow rounded-md p-6 flex items-center justify-between ${
                task.completed
                  ? "ring-1 ring-green-400 bg-green-100"
                  : "ring-1 ring-purple-400 bg-purple-100"
              }`}
              key={index}
            >
              <div className="flex-grow">
                <p
                  className={`text-xl ${
                    task.completed
                      ? "line-through text-green-500"
                      : "text-gray-800"
                  }`}
                >
                  {task.text}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Tanggal Mulai: {startDateRef.current.value}
                </p>
                <p className="text-sm text-gray-600">
                  Tanggal Selesai: {endDateRef.current.value}
                </p>
                <p className="text-sm text-gray-600">
                  Jam Mulai: {startTimeRef.current.value}
                </p>
                <p className="text-sm text-gray-600">
                  Jam Selesai: {endTimeRef.current.value}
                </p>
              </div>
              <div className="flex items-center">
                {task.completed ? (
                  <>
                    <button
                      className="flex-no-shrink p-2 ml-4 border-2 rounded text-white border-primary bg-primary hover:bg-[#4ade80b4]"
                      onClick={() => toggleTaskStatus(index)}
                    >
                      Belum Selesai
                    </button>
                    <button
                      className="flex-no-shrink p-2 ml-2 border rounded text-primary border-primary hover:text-white hover:bg-primary"
                      onClick={() => removeTask(index)}
                    >
                      Hapus
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="flex-no-shrink p-2 ml-4 border rounded text-white border-sebg-secondary bg-secondary hover:bg-[#9233eabe]"
                      onClick={() => toggleTaskStatus(index)}
                    >
                      Selesai
                    </button>
                    <button
                      className="flex-no-shrink p-2 ml-2 border rounded text-secondary border-secondary hover:text-white hover:bg-secondary"
                      onClick={() => removeTask(index)}
                    >
                      Hapus
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Todolist;
