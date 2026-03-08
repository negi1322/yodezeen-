import { useState } from "react";
import { useNavigate } from "react-router-dom";
const TalkPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    code: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const countryCodes = [
    { code: "+1", country: "US" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "IN" },
    { code: "+971", country: "AE" },
    { code: "+49", country: "DE" },
    { code: "+33", country: "FR" },
    { code: "+39", country: "IT" },
    { code: "+34", country: "ES" },
    { code: "+48", country: "PL" },
    { code: "+380", country: "UA" },
  ];

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "Is a required field";
    if (!form.email.trim()) newErrors.email = "Is a required field";
    if (!form.phone.trim()) newErrors.phone = "Is a required field";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("Message sent!");
    }
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="connect-overlay">
      <button className="connect-close-btn" onClick={() => navigate("/")}>
        CLOSE &nbsp; ✕
      </button>

      <div className="connect-big-text d-md-block d-none">
        <span className="connect-big-line">LET'S</span>
        <span className="connect-big-line">CONNECT</span>
      </div>

      <div className="connect-form-wrapper">
        <h2 className="connect-heading">
          TELL US A LITTLE BIT ABOUT YOURSELF AND WE WILL GET BACK TO YOU AS
          SOON AS WE CAN
        </h2>

        <form className="connect-form" onSubmit={handleSubmit}>
          <div className="connect-field-group">
            <label className="connect-label-red">
              FIRST NAME*
              {errors.firstName && (
                <span className="connect-error-msg">{errors.firstName}</span>
              )}
            </label>
            <input
              type="text"
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className={`connect-input ${errors.firstName ? "error" : ""}`}
            />
          </div>

          <div className="connect-field-group">
            <label className="connect-label-gray">LAST NAME</label>
            <input
              type="text"
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="connect-input"
            />
          </div>

          <div className="connect-field-group">
            <label className="connect-label-gray">
              PHONE NUMBER*
              {errors.phone && (
                <span className="connect-error-msg">{errors.phone}</span>
              )}
            </label>
            <div className="connect-phone-row">
              <div className="connect-code-wrapper">
                <label
                  className="connect-label-gray"
                  style={{ fontSize: "11px" }}
                >
                  CODE*
                </label>
                <select
                  value={form.code}
                  onChange={(e) => handleChange("code", e.target.value)}
                  className="connect-select"
                >
                  <option value=""></option>
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.country} {c.code}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={`connect-input ${errors.phone ? "error" : ""}`}
                style={{ flex: 1 }}
              />
            </div>
          </div>

          <div className="connect-field-group">
            <label className="connect-label-red">
              EMAIL*
              {errors.email && (
                <span className="connect-error-msg">{errors.email}</span>
              )}
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`connect-input ${errors.email ? "error" : ""}`}
            />
          </div>

          {/* Message */}
          <div className="connect-field-group">
            <label className="connect-label-gray">MESSAGE</label>
            <textarea
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={2}
              className="connect-textarea"
            />
          </div>

          <button type="submit" className="connect-submit-btn">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default TalkPage;
