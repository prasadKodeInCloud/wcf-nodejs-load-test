using System.Runtime.Serialization;
using System;
using System.Collections.Generic;
namespace RestService
{
    public class RestServiceImpl : IRestServiceImpl
    {
        #region IRestServiceImpl Members

        public string Factorial(string id)
        {
            return this.Fact(Convert.ToInt32(id)).ToString();
        }

        public string Loop(string id)
        {
            Int32 value = Convert.ToInt32(id);
            for (int i = 0; i < value; i++)
            {
                //calculate the factorial value of 20 in the loop.
                Fact(20);
            }
            return "Done";
        }

        #endregion

        public Int64 Fact(int n)
        {
            if (n == 0) return 1;
            else return n * Fact(n - 1);
        }

    }
       
}