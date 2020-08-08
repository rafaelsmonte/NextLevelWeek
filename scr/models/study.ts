import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = new Schema({
    name: {
        type: String,
        required: [true, 'Nome é obrigatorio'],
        trim: true,
        lowercase: true,
      },
      avatar: {
        type: String,
        required: [true, 'Avatar é obrigatorio'],
        trim: true,
        lowercase: true,
      },
      whatsapp: {
        type: String,
        required: [true, 'Whatsapp é obrigatorio'],
        trim: true,
        lowercase: true,
      },
      bio: {
        type: String,
        required: [true, 'Biografia é obrigatoria'],
        trim: true,
        lowercase: true,
      },
      subject: {
        type: String,
        required: [true, 'Disciplina é obrigatoria'],
        trim: true,
        lowercase: true,
      },
      cost: {
        type: Number,
        required: [true, 'Custo por hora é obrigatorio'],
        minimum: [0.1,'Custo por hora tem que ser maior que zero']
      },
});


export default mongoose.model("final", schema);

/*
name:"rafael",
    avatar:'https://s2.glbimg.com/3Qhnv2I3Rr2rtpcdR0_9LurZVbc=/695x0/s.glbimg.com/po/tt2/f/original/2016/05/12/whatsapp-logo.jpg',
    whatsapp:'18996352885',
    bio:'ewrkpsljrewojkewoprporiwepiorweoipwreoiprweoipweropiewr',
    subject: 'bola',
    cost:'20'*/