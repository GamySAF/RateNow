import { useEffect, useState } from "react";
import { getFeedback } from "../services/api";
import "../styles/main.css";

function AdminDashboard() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFeedback();
        setFeedbackList(res.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="table-container">
    <div>
      <h2>Admin Dashboard</h2>
      <table border="1">
        <thead>
          <tr>
           
            <th>Service</th>
            <th>Food</th>
            <th>Cleanliness</th>
            <th>Comments</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbackList.map((fb) => (
            <tr key={fb._id}>
              <td>{fb.serviceRating}</td>
              <td>{fb.foodRating}</td>
              <td>{fb.cleanlinessRating}</td>
              <td>{fb.comments}</td>
              <td>{new Date(fb.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default AdminDashboard;
