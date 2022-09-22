type customerInfoType = {
    name: string;
    phoneNumber: string;
    email: string;
};

const customerInfo: customerInfoType[] = [
    {
        name: 'Phùng Duy Khang',
        phoneNumber: '0969696969',
        email: 'khangpdk073101@gmail.com',
    },
    {
        name: 'Khang Vippro',
        phoneNumber: '0123456789',
        email: 'khangvippro@gmail.com',
    },
    {
        name: 'Khang Tà đạo',
        phoneNumber: '0147852369',
        email: 'khangtadao@gmail.com',
    },
    {
        name: 'Nguyễn Văn Hiền',
        phoneNumber: '0951753842',
        email: 'vanhien@gmail.com',
    },
    {
        name: 'Nguyễn Văn Khang',
        phoneNumber: '0369852147',
        email: 'vanKhang@gmail.com',
    },
    {
        name: 'Phùng Duy Hiền',
        phoneNumber: '0789456132',
        email: 'duyhien@gmail.com',
    },
    {
        name: 'Nguyễn Văn A',
        phoneNumber: '0159874236',
        email: 'vana@gmail.com',
    },
    {
        name: 'Nguyễn Văn B',
        phoneNumber: '0321987654',
        email: 'vanb@gmail.com',
    },
];

const randomCustomer = () => {
    const random = Math.floor(Math.random() * customerInfo.length);
    return customerInfo[random];
};

export default randomCustomer;
