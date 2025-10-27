import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";


const ContactForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    email: "",
    phone: "",
    phoneArea: "",
    phonePrefix: "",
    phoneLine: "",
    requests: [] as string[],
    otherRequest: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.requests.length === 0) {
      newErrors.requests = "Please select at least one request";
    }
    if (formData.requests.includes("Other") && !formData.otherRequest.trim()) {
      newErrors.otherRequest = "Please specify your other request";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    
    const fullPhone = formData.phoneArea && formData.phonePrefix && formData.phoneLine
      ? `${formData.phoneArea}-${formData.phonePrefix}-${formData.phoneLine}`
      : "";

    const submissionData = {
      ...formData,
      phone: fullPhone,
    };

    console.log("Form submitted:", submissionData);

    // Send to backend?
    alert("Form submitted successfully!");
  };

  const handleCheckboxChange = (option: string) => {
    setFormData((prev) => ({
        ...prev,
        requests: prev.requests.includes(option)
            ? prev.requests.filter((r) => r !== option) // Remove if already selected
            : [...prev.requests, option], // Add if not selected
    }));
  };

  const requestOptions = [
    "Questions about studying at the Design Lab",
    "Questions about research at the Design Lab",
    "Questions about jobs at the Design Lab",
    "I am looking for a design partner to help build a foundation for long-term success",
    "I would like to support the Design Lab",
    "I am a vendor with an offer or suggestion",
    "Report a problem with the website",
    "Other",
  ];

  return (
    <div className="space-y-8">
      {/* Contact Form Card */}
      <Card className="p-6 shadow-lg font-roboto" style={{ borderRadius: "2rem", backgroundColor: "#FAFAFA" }}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">Get in Touch</h2>
          
          {/* Name */}
          <div className="mb-6">
            <label className="text-base font-semibold block mb-2">
              Name <span className="text-red-600">*</span>
            </label>
            
            {/* Two inputs side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-150">
              <div>
                <Input
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="First Name"
                  className={`border-2 focus:outline-none focus:!border-gray-300 ${errors.firstName ? "!border-red-500" : "border-gray-300"}`}
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              <div>
                <Input
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Last Name"
                  className={`border-2 focus:outline-none focus:ring-0 focus:!border-gray-300 ${errors.lastName ? "!border-red-500" : "border-gray-300"}`}
                />
                {errors.lastName && (
                  <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
          </div>

          {/* Department */}
          <div className="mb-6">
            <label className="text-base font-semibold block mb-2">Department</label>
            <div className="w-150">
              <Input
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                placeholder="Department"
                className="border-2 border-gray-300 focus:outline-none focus:ring-0 focus:!border-gray-300"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="text-base font-semibold block mb-2">
              Email <span className="text-red-600">*</span>
            </label>
            <div className="w-150">
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                className={`border-2 focus:outline-none focus:ring-0 focus:!border-gray-300 ${errors.email ? "!border-red-500" : "border-gray-300"}`}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="text-base font-semibold block mb-2">
              Phone
            </label>
            <div className="flex items-center gap-2 w-150">
              <div className="flex-1">
                <Input
                  id="phone_1"
                  type="tel"
                  maxLength={3}
                  value={formData.phoneArea}
                  className="text-center border-2 border-gray-300 focus:outline-none focus:ring-0 focus:!border-gray-300"
                  placeholder="123"
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    setFormData({ ...formData, phoneArea: value });

                    if (value.length === 3) {
                      document.getElementById('phone_2')?.focus();
                    }
                  }}
                />
              </div>

              <span className="text-xl">-</span>

              {/* Prefix */}
              <div className="flex-1">
                <Input
                  id="phone_2"
                  type="tel"
                  maxLength={3}
                  value={formData.phonePrefix}
                  className="text-center border-2 border-gray-300 focus:outline-none focus:ring-0 focus:!border-gray-300"
                  placeholder="456"
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    setFormData({ ...formData, phonePrefix: value });
                    
                    if (value.length === 3) {
                      document.getElementById('phone_3')?.focus();
                    }
                  }}
                />
              </div>

              <span className="text-xl">-</span>

              {/* Line Number (####) */}
              <div className="flex-1">
                <Input
                  id="phone_3"
                  type="tel"
                  maxLength={4}
                  value={formData.phoneLine}
                  className="text-center border-2 border-gray-300 focus:outline-none focus:ring-0 focus:!border-gray-300"
                  placeholder="7890"
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    setFormData({ ...formData, phoneLine: value });
                  }}
                />
              </div>
            </div>
          </div>

          {/* What are you requesting? */}
          <div className="mb-6">
            <label className="text-base font-semibold block mb-3">
              What are you requesting? <span className="text-red-600">*</span>
            </label>
            <div className="space-y-3">
              {requestOptions.map((option) => (
                <div key={option} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id={option}
                    checked={formData.requests.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="mt-1 w-5 h-5 border-2 border-gray-400 rounded checked:bg-blue-600 checked:border-blue-600 focus:ring-0 focus:outline-none cursor-pointer"
                  />
                  <label
                    htmlFor={option}
                    className="text-base text-gray-700 cursor-pointer leading-relaxed"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
            {errors.requests && (
              <p className="text-red-600 text-sm mt-2">{errors.requests}</p>
            )}
          </div>

          {/* Other Request Field */}
          {formData.requests.includes("Other") && (
              <div className="mb-6 ml-8">
                  <Input
                      value={formData.otherRequest}
                      onChange={(e) =>
                          setFormData({ ...formData, otherRequest: e.target.value })
                      }
                      placeholder="Please specify"
                      className={`w-full max-w-md border-2 focus:outline-none focus:ring-0 focus:!border-gray-300 ${errors.otherRequest ? "!border-red-500" : "border-gray-300"}`}
                  />
                  {errors.otherRequest && (
                      <p className="text-red-600 text-sm mt-1">{errors.otherRequest}</p>
                  )}
              </div>
          )}

          {/* How can we help? */}
          <div className="mb-6">
            <label className="text-base font-semibold block mb-2">
              How can we help? <span className="text-red-600">*</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your message..."
              rows={6}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:!border-gray-300"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-12 py-3 !bg-[#9D2235] !hover:bg-[#7d1b2a] text-white font-semibold text-lg rounded-md transition-colors"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;