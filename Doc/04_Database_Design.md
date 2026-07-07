We Will Create Three Collection For Db First 
- UserModel => To Store User Information
- Resumes   => Store uploaded resume metadata and extracted text
- Analysis => Store AI-generated resume analysis and job matching results.

## UserModel
-_id
- name
- email
- password
- profilePicture  // For Dashboard
- isDeleted
- deletedAt
- createdAt
- updatedAt
---

## RESUME COLLECTION
- _id
- userId
- title
- originalFileUrl
- fileType
- extractedText
- createdAt
- updatedAt


## ANALYSIS COLECTION
- _id
- resumeId
- jobTitle
- companyName
- jobDescription
- atsScore
- matchScore
- strengths
- weaknesses
- missingSkills
- suggestions
- createdAt
- updatedAt