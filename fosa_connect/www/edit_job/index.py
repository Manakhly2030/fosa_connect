import frappe

def get_context(context):
    # Get the value of 'job_id' from the URL parameter
    job_id = frappe.request.args.get('job_id')
    context.job_id = job_id

@frappe.whitelist()
def edit_job(job_id, job_title, qualification, responsibility, start_date, end_date, job_category, location, job_type, salary_info, job_description, organization, isPublished):
    job=frappe.get_doc("Job",job_id)
    job.job_title = job_title
    job.qualification = qualification
    job.responsibility = responsibility
    job.start_date = start_date
    job.last_date_to_apply = end_date
    job.job_category = job_category
    job.location = location
    job.job_type = job_type
    job.salary_info = salary_info
    job.job_description = job_description
    job.organization_name = organization
    job.published = isPublished
    job.save()
    frappe.db.commit()

    return "Job Edited successfully"