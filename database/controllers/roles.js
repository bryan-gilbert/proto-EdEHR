
export default class Role {
  /*
   * Convert the LTI role value into our course roles. Only support student and instructor which is mapped to
   * instructor, staff and faculty from the LTI consumer side.
   */
  constructor (ltiRole) {
    this.ltiRole = ltiRole
    let r = ltiRole.toLowerCase()
    this.isStudent = r.includes('student') || r.includes('learner')
    this.isInstructor = r.includes('instructor') || r.includes('staff') || r.includes('faculty')
    this.isValid = this.isInstructor !== this.isStudent
  }
}
