import React from 'react'

const GoogleMap = () => {
    return (
        <div className="lg:pt-15 lg;pb-15 pb-10 pt-10 overflow-x-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.570936070096!2d72.81811637438913!3d19.118484647090023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f8f5a97b1%3A0x771e6f8a63015eeb!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1701104832319!5m2!1sen!2sin" width="1920" height="497" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default GoogleMap