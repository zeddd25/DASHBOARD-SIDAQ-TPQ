import { TbCameraFilled, TbPencil } from "react-icons/tb";
import { RecapInfo } from "../../components/ui";
import { useState, useEffect } from "react";
import { useStateContext } from "../../context/StateContext";

const Profile = () => {
  const { open } = useStateContext();
  const [isEditing, setIsEditing] = useState(false);

  // Data profil pengguna
  const [profileData, setProfileData] = useState({
    name: "Masjid Pemuda Peradaban ",
    email: "pemudaperadaban@gmail.com",
    password: "********",
    birthDate: "12-10-1994",
  });

  // Handle perubahan data profil
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  // Simpan perubahan data profil (simulasi pengiriman ke server)
  const saveProfileChanges = () => {
    // Di sini tambahkan logika untuk menyimpan data profil ke server.
    setIsEditing(false);
  };

  useEffect(() => {
    // Jika sedang mengedit, tambahkan kelas CSS khusus untuk mengatur tampilan
    if (isEditing) {
      document.body.classList.add("editing-mode");
    } else {
      document.body.classList.remove("editing-mode");
    }
  }, [isEditing]);

  return (
    <section
      className={`font-poppins py-5 px-5 ${
        open ? "md:pl-[261px]" : "w-full md:pl-[82px]"
      } duration-500`}
    >
      <RecapInfo title={"Edit Profile"} className={"mt-14"}/>
      <div className="mt-auto flex flex-col p-4 max-w-md mx-auto bg-[#F3F4F6] rounded-lg ring-1 ring-[#16151321] shadow-md ">
        <TbCameraFilled className="text-3xl text-black" />
        <div className="w-80 h-80 relative overflow-hidden rounded-full ring-1 ring-[#16151321] mx-auto">
          <img
            src="https://img.freepik.com/premium-vector/round-avatar-portrait-standing-elementary-student-muslim-boy-flat-style_768258-1765.jpg?w=826 "
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </div>

        <div className="text-[#151515] font-semibold flex flex-col value">
          {isEditing ? (
            <div>
              <label htmlFor="name" className="text-green-400 text-xl mb-2">
                Nama :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleProfileChange}
                className="w-full text-lg border rounded-lg outline-none py-2 px-3 mb-4"
              />
            </div>
          ) : (
            <div>
              <h1 className="text-primary text-xl mb-2">Nama :</h1>
              <h2 className="text-lg">{profileData.name}</h2>
            </div>
          )}

          {isEditing ? (
            <div>
              <label htmlFor="email" className="text-primary text-xl mt-4">
                Email :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleProfileChange}
                className="w-full text-lg border rounded-lg py-2 px-3 mb-4"
              />
            </div>
          ) : (
            <div>
              <h1 className="text-primary text-xl mt-4">Email :</h1>
              <h2 className="text-lg">{profileData.email}</h2>
            </div>
          )}

          {isEditing ? (
            <div>
              <label htmlFor="password" className="text-primary text-xl mt-4">
                Kata Sandi :
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={profileData.password}
                onChange={handleProfileChange}
                className="w-full text-lg border rounded-lg py-2 px-3 mb-4"
              />
            </div>
          ) : (
            <div>
              <h1 className="text-primary text-xl mt-4">Kata Sandi :</h1>
              <h2 className="text-lg">{profileData.password}</h2>
            </div>
          )}

          {isEditing ? (
            <div>
              <label
                htmlFor="birthDate"
                className="text-primary text-xl mt-4"
              >
                Tanggal Lahir :
              </label>
              <input
                type="text"
                id="birthDate"
                name="birthDate"
                value={profileData.birthDate}
                onChange={handleProfileChange}
                className="w-full text-lg border rounded-lg py-2 px-3 mb-4"
              />
            </div>
          ) : (
            <div>
              <h1 className="text-primary text-xl mt-4">Tanggal Lahir :</h1>
              <h2 className="text-lg">{profileData.birthDate}</h2>
            </div>
          )}

          <div>
            {isEditing ? (
              <button
                onClick={saveProfileChanges}
                className="bg-green-400 text-white hover:bg-[#4ade80b4] hover:ring-[#4ade80b4] flex items-center gap-2 py-3 px-5 rounded-lg mt-4 transition duration-300 transform hover:scale-105"
              >
                <TbPencil className="text-xl" />
                SIMPAN
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-green-400 text-white font-medium tracking-wide hover:bg-[#4ade80b4] flex items-center gap-2 py-3 px-5 rounded-lg mt-4 transition duration-300 transform hover:scale-105"
              >
                <TbPencil className="text-xl" />
                EDIT PROFILE
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
