import connectMongo from 'src/backend/utils/connectMongo';
import InstallmentReciept from 'src/backend/model/installmentreciept/installmentReciept';
import newUser from 'src/backend/model/newuser/newuser';


export default async function getIncome(req, res) {
  try {
    await connectMongo();
    console.log('connected');

    if (req.method === 'POST') {
      const dateRange = parseInt(req.body.days);
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - dateRange);
      
      
      const allInstallments = await InstallmentReciept.find({
        createdAt: { $gte: startDate } // Filter by receipts created after or on startDate
      });
      const installmentDataWithUsernames = await Promise.all(allInstallments.map(async (installment) => {
        const user = await newUser.findOne({idCradNumber: installment.serialNo});
        return {
          _id: installment._id,
          serialNo: installment.serialNo,
          installmentAmount: installment.installment,
          tillId: installment.tillId,
          createdAt: installment.createdAt,
          updatedAt: installment.updatedAt,
          name: user ? user.name : 'Unknown'
        };
      } ));
      
      res.status(200).json(installmentDataWithUsernames)
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
