import React from "react";
import "./WidgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c5cae529-9f19-4f93-8f84-42c8a66e011a/degnzod-9f81a401-0bc1-4a62-ba71-1e3bb0cb6022.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1Y2FlNTI5LTlmMTktNGY5My04Zjg0LTQyYzhhNjZlMDExYVwvZGVnbnpvZC05ZjgxYTQwMS0wYmMxLTRhNjItYmE3MS0xZTNiYjBjYjYwMjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bYLVrMHhQw6QtiGIWhOB_Hf0vMryYzXap7v4_gxOpvc"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tanjiro</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c5cae529-9f19-4f93-8f84-42c8a66e011a/degnzod-9f81a401-0bc1-4a62-ba71-1e3bb0cb6022.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1Y2FlNTI5LTlmMTktNGY5My04Zjg0LTQyYzhhNjZlMDExYVwvZGVnbnpvZC05ZjgxYTQwMS0wYmMxLTRhNjItYmE3MS0xZTNiYjBjYjYwMjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bYLVrMHhQw6QtiGIWhOB_Hf0vMryYzXap7v4_gxOpvc"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tanjiro</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c5cae529-9f19-4f93-8f84-42c8a66e011a/degnzod-9f81a401-0bc1-4a62-ba71-1e3bb0cb6022.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1Y2FlNTI5LTlmMTktNGY5My04Zjg0LTQyYzhhNjZlMDExYVwvZGVnbnpvZC05ZjgxYTQwMS0wYmMxLTRhNjItYmE3MS0xZTNiYjBjYjYwMjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bYLVrMHhQw6QtiGIWhOB_Hf0vMryYzXap7v4_gxOpvc"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tanjiro</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c5cae529-9f19-4f93-8f84-42c8a66e011a/degnzod-9f81a401-0bc1-4a62-ba71-1e3bb0cb6022.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1Y2FlNTI5LTlmMTktNGY5My04Zjg0LTQyYzhhNjZlMDExYVwvZGVnbnpvZC05ZjgxYTQwMS0wYmMxLTRhNjItYmE3MS0xZTNiYjBjYjYwMjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bYLVrMHhQw6QtiGIWhOB_Hf0vMryYzXap7v4_gxOpvc"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tanjiro</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
