import { Route, Routes } from "react-router-dom";
import { Santri, Profile as SantriProfile } from "../pages/dashboard-santri";
import {
  Ustadz,
  Profile as UstadzProfile,
  TambahSantri,
  DataSantri,
  SkillSantri,
} from "../pages/dashboard-ustadz";
import { Footer, Header, Sidebar } from "../components/ui";
import BottomBar from "../components/ui/BottomBar";
import ModalLogout from "../components/modal/ModalLogout";
import { useStateContext } from "../context/StateContext";
import {
  Profile as StaffProfile,
  StaffUstadz,
  AbsensiSantri,
} from "../pages/dashboard-staff-ustadz";
import { Pondok, Profile as PondokProfile } from "../pages/dasboard-pondok";
import DataUstadz from "../pages/dasboard-pondok/DataUstadz";

const Routing = () => {
  const { showModal, setShowModal } = useStateContext();

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Sidebar />
      <Header handleLogoutClick={handleLogoutClick} />
      <Routes>
        {/* PONDOK */}
        <Route path="/pondok" element={<Pondok />} />
        <Route path="/profile/pondok" element={<PondokProfile />} />
        <Route path="/data-ustadz/pondok" element={<DataUstadz />} />
        {/* SANTRI */}
        <Route path="/santri" element={<Santri />} />
        <Route path="/profile/santri" element={<SantriProfile />} />
        {/* USTADZ */}
        <Route path="/ustadz" element={<Ustadz />} />
        <Route path="/profile/ustadz" element={<UstadzProfile />} />
        <Route path="/input-tambah-santri/ustadz" element={<TambahSantri />} />
        <Route path="/input-data-santri/ustadz" element={<DataSantri />} />
        <Route path="/input-skill-santri/ustadz" element={<SkillSantri />} />
        {/* STAFF USTADZ */}
        <Route path="/staff-ustadz" element={<StaffUstadz />} />
        <Route path="/profile/staff-ustadz" element={<StaffProfile />} />
        <Route
          path="/input-absensi-santri/staff-ustadz"
          element={<AbsensiSantri />}
        />
      </Routes>
      {showModal && <ModalLogout onClose={handleCloseModal} />}
      <Footer />
      <BottomBar />
    </>
  );
};

export default Routing;
