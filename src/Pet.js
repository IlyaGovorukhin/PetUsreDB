import mongoose from 'mongoose';
var Schema = mongoose.Schema;
import _ from 'lodash';
const PetSchame = new Schema ({
    type: {
           type: String,
           emun: ['cat','dog'], //����� ���� ������ 'cat','dog'
           required: true,
    },
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId, // ��� ���������� ��� � ���� ������ ����� id
        ref: 'User',                   // � ��� ��� id
        required: true,
    },
}, {
    timestamps: true,                // ����� ���������� ����� ���������
})
PetSchame.methods.toJSON= function(){  // ��������� ����� ������ ����� ����������������� � JSON(����� ����� � ������ � ��)
    return _.pick(this, ['name', 'type', 'owner'])
}

export default mongoose.model('Pets', PetSchame);