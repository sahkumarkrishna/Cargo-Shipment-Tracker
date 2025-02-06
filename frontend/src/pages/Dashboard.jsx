import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShipments } from "../redux/actions/shipmentActions";
import ShipmentList from "../Components/ShipmentList"
import ShipmentForm from "../components/ShipmentForm";

const Dashboard = () => {
  const dispatch = useDispatch();
  const shipments = useSelector((state) => state.shipments);

  useEffect(() => {
    dispatch(fetchShipments());
  }, [dispatch]);

  return (
    <div>
      <h1>Dashboard</h1>
      <ShipmentForm />
      <ShipmentList shipments={shipments} />
    </div>
  );
};

export default Dashboard;
