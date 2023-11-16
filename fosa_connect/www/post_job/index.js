$(document).ready(function () {
  console.log("on load");
  $("#input-submit").click(function(){
    console.log("Button clicked!");
    createJobEntry();
  });
});

const createJobEntry = () => {
  if(document.getElementById('isPublished').checked){
    var isPublished = 1;
  }
  else {
    var isPublished = 0;
  }
    // Get values from form fields
    let title = $("#input-title").val().trim() || '';
    let qualification = $("#input-qualification").val().trim() || '';
    let responsibility = $("#input-responsibility").val().trim() || '';
    let start_date = $("#start-date").val().trim() || '';
    let end_date = $("#end-date").val().trim() || '';
    let category = $("#input-category").val().trim() || '';
    let location = $("#input-location").val().trim() || '';
    let type = $("#input-type").val().trim() || '';
    let salary = $("#input-salary").val().trim() || '';
    let message = $("#input-message").val().trim() || '';
    let organization = $("#input-organization").val().trim() || '';

    // Create a new job posting entry
    frappe.call({
        method: "fosa_connect.fosa_connect.doctype.job.job.post_job",
        args: {
            "job_title": title,
            "qualification": qualification,
            "responsibility": responsibility,
            "start_date": start_date,
            "end_date": end_date,
            "job_category": category,
            "location": location,
            "job_type": type,
            "salary_info": salary,
            "job_description": message,
            "organization" : organization,
            "isPublished" : isPublished
        },
        callback: function (response) {
            if (response.message) {
                // Display a success message or redirect the user
                alert("Job posting created successfully");
                window.location.href = "/jobs"; // Redirect to a jobs page
            } else {
                // Handle error, if any
                alert("Error: Unable to create job posting");
            }
        }
    });

    return false;
}
