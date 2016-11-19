import mongoose from 'mongoose';
import _ from 'lodash';
var Schema = mongoose.Schema;

const UserShame = new Schema ({
        name: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,                // ����� ���������� ����� ���������
    })

UserShame.methods.toJSON= function(){  // ��������� ����� ������ ����� ����������������� � JSON(����� ����� � ������ � ��)
    return _.pick(this, ['name'])
}
// UserShame.methods.toObject= function(){  // ��������� ����� ������ ����� ����������������� � J�����(����� ����� � ������ � ��)
//     return {
//         name : "prefix_" + this.name    // ����� ��������� ����� ������� � ���������
//     }
// }

export default mongoose.model('User', UserShame);